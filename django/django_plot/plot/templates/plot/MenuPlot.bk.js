import React, {useState, useEffect, useRef} from 'react';
import { InteractivPlot } from './TrashInteractivPlot'
import { DropList } from './DropList';
import Cookies from 'js-cookie'
import { isDocumentElement } from 'react-select/src/utils';

var menu_list1 = JSON.parse(document.getElementById('menu_list').textContent);

export const API_URL = "http://localhost:8000/";

console.log(menu_list1['menu']);

const menu_keys = (arr) => arr['menu'].map(d => {
    return {
        value: d,
        label: d
    }          
});

const labelMap = (arr) => arr.map(d => {
    return {
        value: d,
        label: d
    }          
});

export const MenuPlot = () => {

    const menuKeys = useRef(menu_keys(menu_list1));

    const [currentDrop, setCurrentDrop] = useState(menuKeys.current[0]);
    const [subDropList, setSubDropList] = useState(null);

    const [isNewData, setIsNewData] = useState(false);

    const [dataXLabel, setDataXLabel] = useState(null);
    const [dataX, setDataX] = useState(null);
    const [maxDataX, setMaxDataX] = useState(null);

    const [dataYLabel, setDataYLabel] = useState(null);
    const [dataY, setDataY] = useState(null);
    const [maxDataY, setMaxDataY] = useState(null);

    const clearDataState = () => {
        setDataXLabel(null);
        setDataYLabel(null);
        setDataX(null);
        setDataY(null);
        setMaxDataX(null);
        setMaxDataY(null);
    }

    const receiveDropList = (d) => {
        const subgroupList = d['subgroup_list'];
        setSubDropList(labelMap(subgroupList));
    };

    const receiveNewData = (d, fn, maxfn) => { 
        fn(d['trun_data']);
        maxfn(d['min_max_data']);
    };

    const requestHandler = (evt, key, fn) => {
        const csrftoken = Cookies.get('csrftoken');
        const formData = new FormData();
        
        if(Array.isArray(evt)){
            for (let i in evt){
                formData.append(key[i], evt[i].value);
            }    
        }
        else {
            formData.append(key, evt.value);
        }

        fetch(API_URL, {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrftoken
              },
            body: formData
        })
        .then(res => res.json())
        .then(d => fn(d))
        .catch(err => console.log(err))
    };

    useEffect(() => {
        // requestHandler(currentDrop, 'main_group', receiveDropList)
        // setIsNewData(true);
    }, []);

    useEffect(() => {
        requestHandler(currentDrop, 'main_group', receiveDropList);
        clearDataState()
    }, [currentDrop]);

    // useEffect(() => {
    //     if(isNewData){
    //         requestHandler(currentDrop, 'main_group', receiveDropList)
    //         setIsNewData(true);
    //     }
    // }, [isNewData]);

    useEffect(() => {
        // requestHandler()
        // console.log('herer')
        // setDataXLabel(subDropList[0]);
        // setDataYLabel(subDropList[1]);
    }, [subDropList]);

    // useEffect(() => {
    //     requestHandler(dataXLabel, 'data_request', receiveNewData)
    // }, [dataXLabel]);

    // useEffect(() => {
        
    // }, [dataYLabel]);

    return(
        <div>
            <div id='tooltip-panel'>
                <div>
                <DropList
                    data={menuKeys.current}
                    value={currentDrop}
                    onChange={a => {
                        requestHandler(a, 'main_group', receiveDropList);
                        setCurrentDrop(a);
                    }}
                />
                </div>
                {subDropList != null &&
                    <>
                    <div>
                        <DropList
                            data={subDropList}
                            value={subDropList[0]}
                            // onChange={(a) => {
                            //     setDataXLabel(a);
                            // }}
                        />
                    </div>
                    <div>
                        <DropList
                            data={subDropList}
                            value={subDropList[1]}
                            // onChange={(a) => {
                            //     setDataYLabel(a);
                            // }}
                        />
                    </div>
                    </>
                }
                </div>
            {/* {data != null && maxData != null &&
                <InteractivPlot data={data} axisdata={maxData} />
            } */}
        </div>
    )

}