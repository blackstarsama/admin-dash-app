import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/actions";
import photo from "../images/photo.png"; // Adjust the import based on your action creator

const Top = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name); // Adjust based on your state structure
  const userRole = useSelector((state) => state.user.role); // Adjust based on your state structure

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="right_top">
      <button id="menu-btn" onClick={handleMenuToggle}>
        <span className="material-icons-sharp">menu</span>
      </button>
      <div className="theme-toggler">
        <span className="material-icons-sharp active">light_mode</span>
        <span className="material-icons-sharp">dark_mode</span>
      </div>
      <div className="profile">
        <div className="info">
          <p>
            Hey, <b>{userName}</b>
          </p>
          <small className="text-muted">{userRole}</small>
        </div>
        <div className="profile-photo">
          <img src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Top;
