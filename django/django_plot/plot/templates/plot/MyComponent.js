import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export const MyComponent = () => {  
    console.log('hello')
    return(
        <Select options={options} />
    )
}
