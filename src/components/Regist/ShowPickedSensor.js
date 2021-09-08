import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

function ShowPickedSensor(props) {
  const [sensors, setSensors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //var api = 'http://localhost:5000/sensors'
  var api = 'http://172.20.10.3:8080/regist/sensors'

  const fetchNodes = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setSensors(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);

      //api = api + '?node_id='+ props.selectedNode; //추후 수정 필요
      api = api + '/'+ props.selectedNode; //추후 수정 필요

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
  }, [props.selectedNode]);

  //props.selectedNode,props.selectedSensor 위에있던거

  const arrToli = (array) => {
      let result = [];
      console.log("showpickedsensor:",array);
      for (let i=0; i<array[0].length; i++) {
          result.push(
              <ListGroup.Item key={i}>{array[0][i].value_name}</ListGroup.Item>
            );
          console.log(array[0][i].value_name);
      }
      return <ListGroup>{result}</ListGroup>;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error Occurred!</div>;
  if (!sensors) return null;
  return (
    <div style={{height:"60vh"}}>
      <ListGroup style={{height:"35vh", overflow:"auto"}}>
        {sensors.map(sensor => (
          <ListGroup.Item
              action variant="light"
              key={sensor.id} onClick={function(){
              props.setSelectedSensor(sensor.id);
            }}
            style={
                sensor.id === props.selectedSensor
                    ? ({background:"skyblue"})
                    : ({background:""})
            }
            >
            {sensor.name} ({sensor.id})
          </ListGroup.Item>
        ))}
      </ListGroup>
      <button onClick={fetchNodes}>Reload</button>
      <div style={{height:"24vh", overflow:"auto"}}>
          { props.selectedSensor === 0
            ? ""
            : "Sensor Values of <" + sensors.filter(t=>t.id === props.selectedSensor).map(t=>t.name) + "> : "}
          { props.selectedSensor === 0
            ? ""
            : arrToli(sensors.filter(t => t.id === props.selectedSensor).map(t => t.sensor_values))
            }
      </div>
    </div>
  );
}

export default ShowPickedSensor;