import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./components/SideBar";
import BannerComponent from "./components/Banner/BannerComponent";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <SideBar />
      </div>
    </Router>
  );
}

export default App;

// 5932ea
