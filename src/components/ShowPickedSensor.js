import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShowPickedSensor(props) {
  const [sensors, setSensors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  var api = 'http://localhost:5000/sensors'

  const fetchNodes = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setSensors(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);

      api = api + '?node_id='+ props.selectedNode; //추후 수정 필요

      const response = await axios.get(
        api
      );
      setSensors(response.data); // 데이터는 response.data 안에 들어있습니다.

    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNodes();
  }, [props.selectedNode,props.selectedSensor]);

  const arrToli = (array) => {
      let result = [];
      for (let i=0; i<array[0].length; i++) {
          result.push(
              <li key={i}>{array[0][i]}</li>
            );
      }
      return result;
  }

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!sensors) return null;
  return (
    <>
      <ul style={{height:"25vh"}}>
        {sensors.map(sensor => (
          <li key={sensor.id} onClick={function(){
              props.setSelectedSensor(sensor.id);
            }}
            style={
                sensor.id === props.selectedSensor
                    ? ({background:"skyblue"})
                    : ({background:""})
            }>
            {sensor.name} ({sensor.id})
          </li>
        ))}
      </ul>
      <button onClick={fetchNodes}>다시 불러오기</button>
      <div>
          { props.selectedSensor === 0
            ? ""
            : "Sensor Values of <" + sensors.filter(t=>t.id === props.selectedSensor).map(t=>t.name) + "> : "}
          { props.selectedSensor === 0
            ? ""
            : arrToli(sensors.filter(t => t.id === props.selectedSensor).map(t => t.sensor_values))
            }
      </div>
    </>
  );
}

export default ShowPickedSensor;