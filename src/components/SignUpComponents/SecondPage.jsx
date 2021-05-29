import React from 'react';
import SignUpFlow from "./SignUpFlow";
import FormStepTwo from "./FormStepTwo";
import SignUpTitle from "./SignUpTitle";
import Reminder from "../InnerComponents/ReminderComponent.jsx";
import clockIcon from "../../assets/images/clock-icon/clock-icon.svg";

export default function SecondPage() {
    return (
      <div className="create-account-box">
        <SignUpTitle />
        <SignUpFlow step="1" ovalState="active-oval" labelState="active-label" />
        <Reminder
          clockIcon={clockIcon}
          clockText="We’ve sent your email address a code. Please input the 4 digit code here, 
            to verify your email address."
          paddDiff="rm-pd2"
        />
        <FormStepTwo />
      </div>
    );
  }