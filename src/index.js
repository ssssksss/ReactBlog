/* 
여기에 있는 React, ReactDOM은 여러개의 JSX 파일들을
하나로 합치기 위해서 설정되어 있는 creative reactweb이라 한다.
만약에 처음에 한번에 받지 않는 경우 일일히 파일을 만들고
설정을 해주어야 하는 번거로움이 있다.
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //App.js를 실행시킴
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<App /> ,
  // <div id="root"> </div> 란 문구가 public-index.html에 존재한다.
  // 즉 App.jsx를 html파일에 랜더링을 한다는 것이다.
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
