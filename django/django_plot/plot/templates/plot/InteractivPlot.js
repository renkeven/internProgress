import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, HexbinSeries, Hint} from 'react-vis';
import { ShowcaseButton } from './ButtonContent';
import { DropList } from './DropList';

function updateData(data) {
    return data.map(row => ({
        M1ZAMS: row.M1ZAMS + (Math.random() - 0.5) * 10,
        M2ZAMS: row.M2ZAMS + (Math.random() - 0.5) * 2
    }));
  }

export default class InteractivPlot extends Component {
    state = {
        data: this.props.data,
        hoveredNode: null,
        radius: 10,
        offset: 0,
        dataX: 'M1ZAMS',
        dataY: 'M2ZAMS'
    };
    render() {
        const {data, hoveredNode, radius, offset, dataX, dataY} = this.state;

        return(
            <div>
                <div>
                    <ShowcaseButton
                        onClick={() => this.setState({data: updateData(data)})}
                        buttonContent={'Test'}
                    />
                    <DropList
                        id='testt'
                        // onChange={() => this.setState({dataX: document.getElementById('testt').value})}
                        onChange={() => this.setState({data: updateData(data)})}
                    />
                </div>
                <XYPlot
                    xDomain={[8, 15]}
                    yDomain={[8, 15]}
                    getX = {d => d[dataX]}
                    getY = {d => d[dataY]}
                    width={300}
                    onMouseLeave={() => this.setState({hoveredNode: null})}
                    height={300}
                >
                    <HexbinSeries
                        animation
                        style={{
                        stroke: '#125C77',
                        strokeLinejoin: 'round'
                        }}
                        onValueMouseOver={d => this.setState({hoveredNode: d})}
                        xOffset={offset}
                        yOffset={offset}
                        colorRange={['orange', 'cyan']}
                        radius={radius}
                        data={data}
                    />

                    <XAxis />
                    <YAxis />
                    {hoveredNode && (
                        <Hint
                        xType="literal"
                        yType="literal"
                        getX={d => d.x}
                        getY={d => d.y}
                        value={{
                            x: hoveredNode.x,
                            y: hoveredNode.y,
                            px: (8 + 7 * (hoveredNode.x/300)).toFixed(2),
                            py: (8 + 7 * (1 - hoveredNode.y/300)).toFixed(2),
                            value: hoveredNode.length
                        }}
                        />
                    )}

                </XYPlot>
            </div>
        );
    }
}
