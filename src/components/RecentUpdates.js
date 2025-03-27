import React from "react";
import { useSelector } from "react-redux";

const RecentUpdates = () => {
  const updates = useSelector((state) => state.updates); // Assuming updates is part of the Redux state

  // Vérifiez si updates est un tableau
  if (!Array.isArray(updates)) {
    return <p>No updates available.</p>;
  }

  return (
    <div className="recent-updates">
      <h2>Recent Updates</h2>
      <div className="updates">
        {updates.map((update, index) => (
          <div className="update" key={index}>
            <div className="profile-photo">
              <img src={update.photo} alt="" />
            </div>
            <div className="message">
              <p>
                <b>{update.name}</b> {update.message}
              </p>
              <small className="text-muted">{update.time}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentUpdates;
