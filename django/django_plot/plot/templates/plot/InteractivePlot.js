import React, { useState, useRef, useEffect } from 'react';
import {XYPlot, XAxis, YAxis, HexbinSeries, Hint, ContinuousColorLegend} from 'react-vis'
import { ShowcaseButton } from './ButtonContent';

// fetch(API_URL, {
//   // credentials: 'include',
//   method: 'POST',
//   // mode: 'same-origin',
//   headers: {
//       // 'Accept': 'application/json',
//       // 'Content-Type': 'application/json',
//       'X-CSRFToken': csrftoken
//     },
//   // body: JSON.stringify({
//   //     "value": evt.value
//   // })
//   body: formData
// }).then((res) => res.json())
// .then(data => {
//   receiveNewData(data);
// }).catch(err => {
//   console.log(err);
// })
// };

function updateData(data) {
    return data.map(row => ({
        eruptions: row.eruptions + (Math.random() - 0.5),
        waiting: row.waiting + (Math.random() - 0.5)
    }));
  }
  
export const InteractivePlot = () => {

  const DATA1 = [
    {"eruptions": 3.6, "waiting": 79},
    {"eruptions": 1.8, "waiting": 54},
    {"eruptions": 3.6, "waiting": 79},
    {"eruptions": 3.6, "waiting": 79},
    {"eruptions": 4.533, "waiting": 85}
  ];

  const [hoveredNode, setHoveredNode] = useState(null); 
  const [xLim, setXLim] = useState([0,0]);
  const [data, setData] = useState(DATA1);  

  
  useEffect(() => {
    console.log(xLim);
  });

  return (
    <div>
      <ShowcaseButton
        onClick={() => setData(updateData(data))}
        buttonContent={'UpdateData'}
      />
      <XYPlot
        width={400}
        getX={d => d.waiting}
        getY={d => d.eruptions}
        onMouseLeave={() => setHoveredNode(null)}
        height={400}
      >
        <HexbinSeries
          countData={setXLim}
          onValueMouseOver={d => setHoveredNode(d)}
          colorRange={['orange', 'cyan']}
          radius={10}
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
              value: hoveredNode.length
            }}
          />
        )}
      </XYPlot>

      <ContinuousColorLegend
        height={400}
        width={200}
        startColor='orange'
        endColor='cyan'
        startTitle={xLim[0]}
        endTitle={xLim[1]}
        orient='vertical'
      />

    </div>
  );
};
