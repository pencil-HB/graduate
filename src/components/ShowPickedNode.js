import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShowPickedNode(props) {
  const [nodes, setNodes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  var api = 'http://localhost:5000/nodes'

  const fetchNodes = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setNodes(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);

      api = api + '?sink_id='+ props.selectedSink; //추후 수정 필요

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
  }, [props.selectedSink, props.selectedNode]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!nodes) return null;
  return (
    <>
      <ul>
        {nodes.map(node => (
          <li key={node.id} onClick={function(){
              props.setSelectedNode(node.id);
              props.setSelectedSensor(0);
            }}
            style={
              node.id === props.selectedNode
                  ? ({background:"skyblue"})
                  : ({background:""})
          }>
            {node.name} ({node.id})
          </li>
        ))}
      </ul>
      <button onClick={fetchNodes}>다시 불러오기</button>
    </>
  );
}

export default ShowPickedNode;