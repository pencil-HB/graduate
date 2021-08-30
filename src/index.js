import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //js 가 생략된 것. 9번줄 App랑 연동
//같은 디렉토리의 App.js 에서 컴포넌트를 불러와 사용한다는 의미.
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App /> 
//   </React.StrictMode>,
//   document.getElementById('root') //index.html 의 id root 부분에넣음
// );

ReactDOM.render(<App />, document.getElementById('root'));
// app는 사용자 정의 태그.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
