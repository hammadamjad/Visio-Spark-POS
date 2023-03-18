import React from "react";
import "./style.css";
const StatsCard = (props) => {
  return (
    <div className="stats-container">
      <div className="stats-con-row-1">
        <img src={`${props.icon}`} />
        <span>{props.percentage}</span>
      </div>
      <h4>{props.price}</h4>
      <p>{props.title}</p>
    </div>
  );
};

export default StatsCard;
