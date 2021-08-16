import React from 'react';
import ReactDOM from 'react-dom';
import { Face } from './Face';
import { range } from 'd3';

const width = 200;
const height = 150;

const array = range( 6 * 3 );

const App = () => array.map(() => (
    <Face 
    width={width}
    height={height}
    centerX = {width / 2}
    centerY = {height / 2}
    strokeWidth = {5}
    eyeOffsetX = {30}
    eyeOffsetY = {30}
    eyeRadius = {5 + Math.random() * 5}
    mouthWidth = {5 + Math.random()* 10}
    mouthRadius = {40}
    />
));

console.log('t3e3333st');

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);