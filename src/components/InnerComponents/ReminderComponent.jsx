import React from "react";

function ReminderComponent(props) {
  //console.log(props.paddDiff);
  return (
    <div className={`reminder-box ${props.paddDiff}`}>
      <div className="clock-box">
        <img src={props.clockIcon} alt="clock-icon" />
      </div>
      <div className="clock-text">
        {props.clockText}
      </div>
    </div>
  );
}

export default ReminderComponent;