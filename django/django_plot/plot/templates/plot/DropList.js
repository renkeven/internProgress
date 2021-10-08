import React from 'react';
import Select from 'react-select';

export const DropList = (props) => {


    // const dataOptions = dataKeys.map(d => {
    //     return {
    //         value: d,
    //         label: d
    //     }
    // });

    // let dataArr = [];

    // for ( let i = 0; i < props.data.length; i++){
    //         dataArr.push(<option value={props.data[i]}> {props.data[i]} </option>)
    // };

    return(
            <Select
                isClearable={false}
                isSearchable={false}
                value={props.value}
                // defaultValue={props.defaultValue}
                options={props.data}
                onChange = {props.onChange}
            />
    )
};