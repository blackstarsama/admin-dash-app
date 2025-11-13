import React from "react";
import { Orders } from "../Orders";

const updates = [
  {
    img: "./images/photo1.jfif",
    name: "Mike Tyson",
    message: "received his order of Night lion tech GPS drone.",
    time: "2 Minutes Ago",
  },
  {
    img: "./images/photo2.jfif",
    name: "Diana Ayi",
    message: "declined her order of 2 DJI Air 25.",
    time: "5 Minutes Ago",
  },
  {
    img: "./images/photo3.jfif",
    name: "Karen Hope",
    message: "received her order of GPS 4K Drone.",
    time: "8 Minutes Ago",
  },
];

const RecentUpdates = () => {
  return (
    <div className="recent-updates">
      <h2>Recent Updates</h2>
      <div className="updates">
        {updates.map((update, index) => (
          <div className="update" key={index}>
            <div className="profile-photo">
              <img src={update.img} alt={update.name} />
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
