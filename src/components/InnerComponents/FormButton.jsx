import React from "react";

function FormButton(props) {
  return (
    <div className="form-button">
      <button type="submit" style={{ backgroundColor: props.bgcolor }}>
      {props.picture ? <><img src={props.picture} alt={props.alter} className="button-icon" /> {props.text}</> : props.text}
      </button>
    </div>
  );
}

export default FormButton;
