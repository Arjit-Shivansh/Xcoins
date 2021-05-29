import React from "react";
import SignUpFlow from "./SignUpFlow";
import SignUpTitle from "./SignUpTitle";
import Reminder from "../InnerComponents/ReminderComponent.jsx";
import clockIcon from "../../assets/images/clock-icon/clock-icon.svg";
import FormStepOne from "./FormStepOne";
import FormStepThree from "./FormStepThree";

function FirstPage() {
  return (
    <div className="create-account-box">
      <SignUpTitle />
      <SignUpFlow step="1" ovalState="active-oval" labelState="active-label" />
      <Reminder
        clockIcon={clockIcon}
        clockText="Once submitted, your profile cannot be changed. Please ensure that your information is correct"
        paddDiff="rm-pd1"
      />
      <FormStepOne />
    </div>
  );
}

function ThirdPage() {
  return (
    <div className="create-account-box">
      <SignUpTitle />
      <SignUpFlow step="2" ovalState="active-oval" labelState="active-label" />
      <FormStepThree/>
    </div>
  );
}

export default function SignUp() {
  return (
    <div className="container">
      <FirstPage />
      <ThirdPage/>
    </div>
  );
}
