import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Sinks() {
  const [nodes, setSinks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSinks = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setSinks(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        'http://localhost:5000/sinks'
      );
      setSinks(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSinks();
  }, []);

  if (loading) return <div>싱크노드 로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!nodes) return null;
  return (
    <>
      <ul>
        {nodes.map(sink => (
          <li key={sink.id}>
            {sink.name} ({sink.id})
          </li>
        ))}
      </ul>
      <button onClick={fetchSinks}>다시 불러오기</button>
    </>
  );
}

export default Sinks;