import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import RightPanel from "./components/RightPanel";
import "./style.css";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleTheme = () => setDarkTheme(!darkTheme);
  const openSidebar = () => setSidebarVisible(true);
  const closeSidebar = () => setSidebarVisible(false);

  return (
    <div className={`container ${darkTheme ? "dark-theme-variables" : ""}`}>
      <Sidebar visible={sidebarVisible} onClose={closeSidebar} />
      <Main />
      <RightPanel
        toggleTheme={toggleTheme}
        openSidebar={openSidebar}
        darkTheme={darkTheme}
      />
    </div>
  );
};

export default App;
