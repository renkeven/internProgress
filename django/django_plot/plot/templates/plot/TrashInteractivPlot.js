import React, {useState, useEffect, useRef} from 'react';
import {
    XYPlot,
    XAxis,
    YAxis, 
    HexbinSeries, 
    Hint, 
    Highlight, 
    Borders, 
    ContinuousColorLegend
    } from 'react-vis';
import { ShowcaseButton } from './ButtonContent';
import { DropList } from './DropList';
import { format } from 'd3-format';
import 'react-vis/es/main.scss';
import { hexbin } from 'd3-hexbin';

// const labelMap = (arr) => arr.map(d => {
//     return {
//         value: d,
//         label: d
//     }          
// });

export const InteractivPlot = ({
        inpdataX,
        inpdataY,
        maxdataX,
        maxdataY,
    }) => {

        const [isNewData, setIsNewData] = useState(false);

        const [animationHook, setAnimationHook] = useState('gentle');
        const [hoveredHook, setHoveredHook] = useState(1);
        const [hoveredNode, setHoveredNode] = useState(null);
        // const [dataX, setdataX] = useState(Object.keys(data[0])[0]);
        // const [dataY, setdataY] = useState(Object.keys(data[0])[1]);


        // const [countHex, setCountHex] = useState([0,0]);
        // const countHexTest = useRef([0,0]);

        const [lastDrawLocation, setLastDrawLocation] = useState(null);
        const [radius, setRadius] = useState(6);

        const updateData = inpdataX.map((d, i) => ({
            x: Number(d[Object.keys(d)[0]]),
            y: Number(inpdataY[i][Object.keys(inpdataY[i])[0]])
        }));

        // const [dataSet, setDataSet] = useState(updateData);

        const xAxisFormatter = (value, index, scale, tickTotal) => {
            return `${(scale.tickFormat(tickTotal, '.2~f')(value / 10 ** (Math.floor(Math.log10(Math.max(...maxdataX[Object.keys(maxdataX)[0]]))))))}`;
        }

        const yAxisFormatter = (value, index, scale, tickTotal) => {
            return `${(scale.tickFormat(tickTotal, '.2~f')(value / 10 ** (Math.floor(Math.log10(Math.max(...maxdataY[Object.keys(maxdataY)[0]]))))))}`;
        }
          

        // useEffect(() => {
        //     console.log(hoveredHook);
        // }, [hoveredHook]);

        // // useEffect(() => {
        // //     //console.log('update', countHexTest.current);
        // //     //setCountHex(countHexTest.current);
        // // }, [countHexTest.current]);

        // const testFunc = (a) => {
        //     console.log('test');
        //     return a
        // };

        // useEffect(() => {
        //     setIsNewData(true);
        //     setDataKeys(labelMap(Object.keys(data[0])));
        //     setdataX(Object.keys(data[0])[0]);
        //     setdataY(Object.keys(data[0])[1]);

        // }, [data]);

        useEffect(() => {
            
            console.log(maxdataX);

            // const hex = hexbin()
            // .x(d => d.x)
            // .y(d => d.y)
            // .radius(radius);

            // console.log(hex(updateData));

            // console.log(axisdata);

        }, []);
        
        // useEffect(() => {
        //     if(isNewData){
        //         setDataSet(updateData);
        //         setIsNewData(false);
        //     }
        // }, [isNewData]);

        return(
            <div>
                <div id='reset-button'>
                    <ShowcaseButton
                        onClick={() => setLastDrawLocation(null)}
                        buttonContent={'Reset'}
                    />
                </div>

                <div id='plot-container'>
                    <XYPlot
                        xDomain={ lastDrawLocation ?
                            [
                                lastDrawLocation.left,
                                lastDrawLocation.right
                            ] :
                                maxdataX[Object.keys(maxdataX)[0]]                  
                        }
                        yDomain={ 
                            lastDrawLocation ?
                            [
                                lastDrawLocation.bottom,
                                lastDrawLocation.top
                            ] :
                                maxdataY[Object.keys(maxdataY)[0]]
                        }
                        // getX = {d => d[dataX]}
                        // getY = {d => d[dataY]}
                        width={500}
                        onMouseLeave={() => setHoveredNode(null)}
                        height={500}
                    >
                        <Highlight
                            onBrushEnd={area => {
                                setLastDrawLocation(area);
                                setTimeout(() => setHoveredHook(1), 500);
                            }}
                            onBrushStart={() => setHoveredHook(0)}
                            onDrag={area => { 
                                setLastDrawLocation({
                                    lastDrawLocation: {
                                        bottom: lastDrawLocation.bottom + (area.top - area.bottom),
                                        left: lastDrawLocation.left - (area.right - area.left),
                                        right: lastDrawLocation.right - (area.right - area.left),
                                        top: lastDrawLocation.top + (area.top - area.bottom)
                                    }
                                });
                            }}
                        />

                        <HexbinSeries
                            // animation={animationHook}
                            style={{
                            pointerEvents: hoveredHook ? '' : 'none',
                            stroke: '#125C77',
                            strokeLinejoin: 'round'
                            }}
                            onValueMouseOver={d => {
                                setHoveredNode(d)
                                setAnimationHook('');
                            }}
                            onValueMouseOut={() => {
                                setHoveredNode(null);
                                setAnimationHook('gentle');
                            }}
                            colorRange={['orange', 'cyan']}
                            radius={radius}
                            data={updateData}
                            //countData={d => countHexTest.current = d}
                            colorbar
                        />

                        {hoveredNode && ( 
                            <Hint 
                                xType="literal"
                                yType="literal"
                                value={{
                                    x: hoveredNode.x,
                                    y: hoveredNode.y,
                                    value: hoveredNode.length
                            }}/> 
                        )}

                        <Borders style={{all: {fill: '#fafafa'}}} />

                        <XAxis 
                            title={`${Object.keys(maxdataX)[0]} (e${format("+03")(Math.floor(Math.log10(Math.max(...maxdataX[Object.keys(maxdataX)[0]]))))})`}
                            tickFormat={xAxisFormatter}
                            tickTotal={6}
                        />
                        
                        <YAxis 
                            title={`${Object.keys(maxdataY)[0]} (e${format("+03")(Math.floor(Math.log10(Math.max(...maxdataY[Object.keys(maxdataY)[0]] ))))})`}
                            tickFormat={yAxisFormatter}
                            tickTotal={6}
                        />

                    </XYPlot>

                    {/* <ContinuousColorLegend
                            height={500}
                            width={200}
                            startColor='orange'
                            endColor='cyan'
                            startTitle={countHex[0]}
                            endTitle={countHex[1]}
                            orient='vertical'
                    /> */}

                </div> 
            </div>
        );

};