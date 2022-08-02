import React from 'react';
import ReactDOM from 'react-dom';
// import './bs/css/bootstrap.min.css';
// import './bs/css/bootstrap-grid.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// mycallback = function (data) {
//   console.log(data)
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <script src='http://localhost:5000/api/tasks?callback=mycallback'></script> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
