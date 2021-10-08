import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const InteractivPlot = (props) => {

  const dataKey = Object.keys(props.options[0]);

  console.log(dataKey);

  const dataArr = dataKey.map( d => {
    return{
      a: d,
      b: d
    }
  });

  console.log(dataArr);

  return(
    <Select options={props.options} />
  )
};

const App = () => {
    return (
      <InteractivPlot options={options} />
    )
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);