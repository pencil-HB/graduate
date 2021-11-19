import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

function ShowPickedNode(props) {
  const [nodes, setNodes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //var api = 'http://localhost:5000/nodes'
  var api = 'http://172.20.10.4:8080/register/nodes'

  const fetchNodes = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setNodes(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);

      //api = api + '?sink_id='+ props.selectedSink; 
      api = api + '/'+ props.selectedSink; 


      const response = await axios.get(
        api
      );
      setNodes(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNodes();
  }, [props.selectedSink]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error Occurred!</div>;
  if (!nodes) return null;
  return (
    <>
      <ListGroup style={{height:"60vh", overflow:"auto"}}>
        {nodes.map(node => (
          <ListGroup.Item
              action variant="light"
              key={node.id} onClick={function(){
              props.setSelectedNode(node.id);
              props.setSelectedSensor(0);
            }}
            style={
              node.id === props.selectedNode
                  ? ({background:"skyblue"})
                  : ({background:""})
          }
          >
            {node.name} ({node.id})
          </ListGroup.Item>
        ))}
      </ListGroup>
      <button onClick={fetchNodes}>Reload</button>
    </>
  );
}

export default ShowPickedNode;