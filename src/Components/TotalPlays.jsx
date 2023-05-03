import React, { useState, useEffect } from "react";
import { VictoryChart, VictoryArea, VictoryStack, VictoryTheme } from "victory";
import _ from "lodash";

export default function TotalPlays()  {
  const [data, setData] = useState(getData());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(getData());
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  function getData() {
    return _.range(7).map(() => {
      return [
        { x: "Jan", y: _.random(1, 2) },
        { x: "March", y: _.random(1, 4) },
        { x: "June", y: _.random(2, 6) },
        { x: "Sept", y: _.random(2, 8) },
        { x: "Nov", y: _.random(2, 10) },
      ];
    });
  }

    return (
      <div className="child">
        <VictoryChart
          theme={VictoryTheme.material}
          animate={{ duration: 1000 }}
        >
          <VictoryStack colorScale={"blue"}>
            {data.map((data, i) => {
              return (
                <VictoryArea key={i} data={data} interpolation={"basis"} />
              );
            })}
          </VictoryStack>
            </VictoryChart>
            <div>Total Plays</div>
      </div>
    );
}


