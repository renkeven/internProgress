import React, {useState, useEffect, useRef} from 'react';
import { InteractivPlot } from './TrashInteractivPlot'
import { DropList } from './DropList';
import Cookies from 'js-cookie'

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

    // const returnFunction = (d, fn, maxfn) => {
    //     return 
    // };

    const receiveNewData = (d, ...fn_kwargs) => { 
        //console.log(fn_kwargs, d);
        fn_kwargs[0][0](d['trunc_data']);
        fn_kwargs[0][1](d['min_max_data']);
    };

    const requestHandler = (evt, key, fn, ...fn_kwargs) => {

        const csrftoken = Cookies.get('csrftoken');
        const formData = new FormData();
        
        if(Array.isArray(evt)){
            evt.forEach(e => formData.append(key, e.value));    
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
        .then(d => fn_kwargs ? fn(d, fn_kwargs) : fn(d))
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
        if(subDropList != null){
            setDataXLabel(subDropList[0]);
            setDataYLabel(subDropList[1]);
        }
    }, [subDropList]);

    useEffect(() => {
        if(dataXLabel != null) {
            requestHandler([currentDrop, dataXLabel], 'data_request', receiveNewData, setDataX, setMaxDataX)
        }
    }, [dataXLabel]);

    useEffect(() => {
        if(dataYLabel != null) {
            requestHandler([currentDrop, dataYLabel], 'data_request', receiveNewData, setDataY, setMaxDataY)
        }
    }, [dataYLabel]);

    useEffect(() => {
        if(dataY != null){
            console.log(dataY);
        }
    }, [dataY]);

    useEffect(() => {
        if(dataX != null){
            console.log(dataX);
        }
    }, [dataX]);

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
                            value={dataXLabel}
                            onChange={(a) => {
                                setDataXLabel(a);
                            }}
                        />
                    </div>
                    <div>
                        <DropList
                            data={subDropList}
                            value={dataYLabel}
                            onChange={(a) => {
                                setDataYLabel(a);
                            }}
                        />
                    </div>
                    </>
                }
                </div>
            {/* {dataX != null && maxDataX != null && dataY != null && maxDataY != null &&
                <h1>helslo</h1>
            } */}

            {dataX != null && maxDataX != null && dataY != null && maxDataY != null &&
                <InteractivPlot inpdataX={dataX} inpdataY={dataY} maxdataX={maxDataX} maxdataY={maxDataY} />
            }
        </div>
    )

}