import React from "react";
import RecentUpdates from "./RecentUpdates";
import SalesAnalytics from "./SalesAnalytics";

const RightPanel = ({ toggleTheme, openSidebar, darkTheme }) => {
  return (
    <div className="right">
      <div className="top">
        <button id="menu-btn" onClick={openSidebar}>
          <span className="material-icons-sharp">menu</span>
        </button>
        <div className="theme-toggler" onClick={toggleTheme}>
          <span
            className={`material-icons-sharp ${!darkTheme ? "active" : ""}`}
          >
            light_mode
          </span>
          <span className={`material-icons-sharp ${darkTheme ? "active" : ""}`}>
            dark_mode
          </span>
        </div>
        <div className="profile">
          <div className="info">
            <p>
              Hey, <b>Sama</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <img src="./images/profil.jfif" alt="Profile" />
          </div>
        </div>
      </div>

      <RecentUpdates />
      <SalesAnalytics />
    </div>
  );
};

export default RightPanel;
