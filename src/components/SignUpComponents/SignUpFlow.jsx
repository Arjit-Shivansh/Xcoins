import React from "react";
import SignUpFlowStep from "./SignUpFlowStep.jsx";

export default function SignUpFlow({ step, ovalState, labelState }) {
  //console.log(step, ovalState, labelState);
  return (
    <div className="setup-step-box">
      <SignUpFlowStep
        step="1"
        text="Account setup"
        ovalState={step.localeCompare("1") === 0 ? ovalState : null}
        labelState={step.localeCompare("1") === 0 ? labelState : null}
      />
      <div className="step-flow-line mr-st-fl-li1"></div>
      <SignUpFlowStep
        step="2"
        text="Personal details"
        ovalState={step.localeCompare("2") === 0 ? ovalState : null}
        labelState={step.localeCompare("2") === 0 ? labelState : null}
      />
      <div className="step-flow-line mr-st-fl-li2"></div>
      <SignUpFlowStep
        step="3"
        text="Verify ID"
        ovalState={step.localeCompare("3") === 0 ? ovalState : null}
        labelState={step.localeCompare("3") === 0 ? labelState : null}
      />
    </div>
  );
}


