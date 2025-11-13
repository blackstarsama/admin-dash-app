import React from "react";

const icons = {
  sales: "analytics",
  expenses: "bar_chart",
  income: "stacked_line_chart",
};

const InsightCard = ({ type, title, value, percent }) => {
  return (
    <div className={type}>
      <span className="material-icons-sharp">{icons[type]}</span>
      <div className="middle">
        <div className="left">
          <h3>{title}</h3>
          <h1>{value}</h1>
        </div>
        <div className="progress">
          <svg>
            <circle cx="38" cy="38" r="36"></circle>
          </svg>
          <div className="number">
            <p>{percent}</p>
          </div>
        </div>
      </div>
      <small className="text-muted">Last 24 Hours</small>
    </div>
  );
};

export default InsightCard;
