import React from 'react';
import ReactDOM from 'react-dom';
import { BackgroundCircle } from './BackgroundCircle';
import { Mouth } from './Mouth.js'

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

const Eyes = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
    <>
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
    </>
);



const App = () => (
    <svg width={width} height={height}>    
        <g transform={`translate(${centerX},${centerY})`}>
            <BackgroundCircle
                radius={centerY - strokeWidth / 2}
                strokeWidth={strokeWidth}/>
            <Eyes
                eyeOffsetX={eyeOffsetX}
                eyeOffsetY={eyeOffsetY}
                eyeRadius={eyeRadius}
            />
            <Mouth 
                mouthRadius={mouthRadius}
                mouthWidth={mouthWidth}
            />
        </g>
    </svg>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);