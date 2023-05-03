import React from "react";
import { VictoryChart, VictoryArea } from 'victory';
import { scaleDiscontinuous, discontinuitySkipWeekends } from '@d3fc/d3fc-discontinuous-scale';

import { scaleTime as d3Scale } from "d3-scale";

function UniquePlays() {
  const data = [
    { x: new Date(2021, 1, 1), y: 2},
    { x: new Date(2021, 3, 2), y: 3 },
      { x: new Date(2021, 6, 8), y: 9 },
    { x: new Date(2021, 9, 9), y: 11 },
    { x: new Date(2021, 11, 10), y: 16 },
    
  ];

  const discontinuousScale = scaleDiscontinuous(
    d3Scale()
  ).discontinuityProvider(discontinuitySkipWeekends());

    return (
      <div className="child">
        <VictoryChart
          width={400}
          height={400}
          scale={{ x: discontinuousScale }}
        >
          <VictoryArea
            data={data}
            style={{ data: { fill: "lightblue", stroke: "teal" } }}
          />
            </VictoryChart>
            <div>Unique Plays</div>
      </div>
    );
}

export default UniquePlays;
