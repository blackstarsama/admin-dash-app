import React from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Top from "./components/Top";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "./style.css";
import RecentUpdates from "./components/RecentUpdates";
import SalesAnalytics from "./components/SalesAnalytics";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Main />
      <div className="right">
        <Top />
        <RecentUpdates />
        <SalesAnalytics />
      </div>
    </div>
  );
}

export default App;
