import React, { useState, useEffect } from "react";
import * as apis from '../../apis/apis';

const Scenario2 = () => {
  const [scenarioData, setScenarioData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const scenarioResponse = await apis.getScenarioTwo();
      if (scenarioResponse.status === 200) {
        setScenarioData(scenarioResponse.data.row_number);
      }
    };
    fetchData();
  }, []);

  return(
    <div>
      Scenario 2
      <div>
        {scenarioData}
      </div>
    </div>
  )
}

export default Scenario2;