import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';

const width = 960;
const height = 600;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 120;
const eyeOffsetY = 100;
const eyeRadius = 50;
const mouthWidth = 10;
const mouthRadius = 140;

const mouthArc = arc()
    .innerRadius(mouthRadius + mouthWidth)
    .outerRadius(mouthRadius)
    .startAngle(Math.PI/2.)
    .endAngle(Math.PI*3/2.);


const App = () => (
    <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
            <circle id='face'
                r={centerY - strokeWidth / 2}
                fill="yellow"
                stroke="black"
                stroke-width={strokeWidth}
            />
            <circle id='Leye'
                cx={- eyeOffsetX}
                cy={- eyeOffsetY}
                r={eyeRadius}
            />
            <circle id='Reye'
                cx={eyeOffsetX}
                cy={- eyeOffsetY}
                r={eyeRadius}
            />
            <path d={mouthArc()} transform={`translate(0,50)`}/>
        </g>
    </svg>
);

console.log(mouthArc());

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

console.log(centerY - strokeWidth / 2);
