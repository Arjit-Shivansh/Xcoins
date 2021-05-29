import React from "react";

function SignUpFlowStep(props) {
  return (
    <div className="account-setup">
      <div className={`oval ${props.ovalState}`}>{props.step}</div>
      <div className={`oval-label ${props.labelState}`}>{props.text}</div>
    </div>
  );
}

export default SignUpFlowStep;
