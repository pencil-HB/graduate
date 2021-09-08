import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dropdown() {
  const [nodes, setNodes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  var nodeNames = [];

  const fetchNodes = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setNodes(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        'http://172.20.10.3:8080/regist/nodes'
      );
      setNodes(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNodes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error Occurred!</div>;
  if (!nodes) return null;
  return (
      <select>
        {nodes.map(node => (
          <option value={node.id} key={node.id}>
            {node.name} ({node.id})
          </option>
        ))}
      </select>
  );
}

export default Dropdown;