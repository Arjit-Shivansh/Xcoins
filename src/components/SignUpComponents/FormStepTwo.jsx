import React from "react";
import { Formik, Form } from "formik";
import FormButton from "../InnerComponents/FormButton";
export default function FormStepTwo() {
  return (
    <Formik>
      <div className="form-box">
        <Form className="form"> 
          <div className="form-control star">
            <label className="">4 digit code</label>
            <div className="input-box">
              <input type="number" id="digit1" name="digit1" maxLength="1" />
              <input type="number" id="digit2" name="digit2"  />
              <input type="number" id="digit3" name="digit3"  />
              <input type="number" id="digit4" name="digit4"  />
            </div>
          </div>
          <FormButton text="RESEND CODE" bgcolor="#86c306"/>
        </Form>
      </div>
    </Formik>
  );
}
