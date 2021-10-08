import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, HexbinSeries} from 'react-vis';

export default class InteractivPlot extends Component {
    constructor(props){
        super(props);
    }

    state = {
        hoveredNode: null,
        offset: 0,
        radius: 10
    };

    // static DataFeed = this.props.data.map(d => {
    //     return {
    //         'x': d[0],
    //         'y': d[1]
    //     }
    // });

    render() {
        const {hoveredNode, offset, radius} = this.state;

        return(
            <XYPlot
                width={300}
                onMouseLeave={() => this.setState({hoveredNode: null})}
                height={300}
            >

                <HexbinSeries
                    animation
                    className="hexbin-example"
                    style={{
                    stroke: '#125C77',
                    strokeLinejoin: 'round'
                    }}
                    onValueMouseOver={d => this.setState({hoveredNode: d})}
                    xOffset={offset}
                    yOffset={offset}
                    colorRange={['orange', 'cyan']}
                    radius={radius}
                    data={this.props.data}
                />

                <XAxis />
                <YAxis />

            </XYPlot>
        );
    }
};