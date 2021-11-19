import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

function ShowSink(props) {
  const [sinks, setSinks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //var api = 'http://localhost:5000/sinks'
  var api = 'http://172.20.10.4:8080/register/sinks'

  const fetchSinks = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setSinks(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);

      //api = api + '?sink_id='+ props.selectedSink; 

      const response = await axios.get(
        api
      );
      setSinks(response.data);
      console.log(sinks);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSinks();
  }, []);

  if (loading) return <div> Loading...</div>;
  if (error) return <div>Error Occurred!</div>;
  if (!sinks) return null;
  return (
    <>
      <ListGroup style={{height:"60vh", overflow:"auto"}}>
        {sinks.map(sink => (
          <ListGroup.Item
              action variant="light"
              key={sink.id} onClick={function(){
              props.setSelectedSink(sink.id);
              props.setSelectedNode(0);
              props.setSelectedSensor(0);
              
            }}
            style={
                sink.id === props.selectedSink
                    ? ({background:"skyblue"})
                    : ({background:""})
            }
            >
            {sink.name} ({sink.id})
          </ListGroup.Item>
        ))}
      </ListGroup>
      <button onClick={fetchSinks}>Reload</button>
    </>
  );
}

export default ShowSink;