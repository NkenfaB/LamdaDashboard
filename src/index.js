// import React from "react";
// import { createRoot } from "react-dom/client";
// //import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";
// import store from "./store/store";

// // ReactDOM.render(
// //   <Provider store={store}>
// //     <App />
// //   </Provider>,
// //   document.getElementById("root")
// // );

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(
// //   <Provider store={store}>
// //     <React.StrictMode>
// //       <App />
// //     </React.StrictMode>
// //   </Provider>
// // );

// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
