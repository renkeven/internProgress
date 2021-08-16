import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';

const width = 960;
const height = 600;
const circleRadius = 30;
const initialMousePosition = {x: width / 2, y: height / 2};


const App = () => {
    const [mousePosition, setMousePosition] = useState(initialMousePosition);

    const handleMouseMove = useCallback( event => {
        const { clientX, clientY } = event;
        setMousePosition( {x: clientX, y: clientY});
    }, [setMousePosition]);

    return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
            <circle id='Leye'
                cx={mousePosition.x}
                cy={mousePosition.y}
                r={circleRadius} 
            />
    </svg>
    );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);