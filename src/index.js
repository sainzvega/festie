import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootEl = document.getElementById("root");

let render = () => {
  const App = require("app/layout/App").default;
  ReactDOM.render( <App />, rootEl);
};

if(process.env.NODE_ENV !== "production") {
  if(module.hot) {
    module.hot.accept("app/layout/App", () => {
      setTimeout(render);
    });
  }
}

render();