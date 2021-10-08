import React from 'react';
import ReactDOM from 'react-dom';
import { InteractivePlot } from './InteractivePlot';
import { MenuPlot } from './MenuPlot';


const App = () => {
    return(
    
    < MenuPlot />
    //<InteractivePlot />
    
    );
}

console.log('run this aafar');
ReactDOM.render(<App/>, document.getElementById('root'));