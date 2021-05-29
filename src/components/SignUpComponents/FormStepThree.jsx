import React from "react";
import { Formik, Form } from "formik";
import { country } from "../../country.js";

export default function FormStepThree() {
  //console.log(country);
  return (
    <Formik>
      <div className="form-box">
        <Form>
          <div className="form-control modify-3">
            <label htmlFor="country">Country</label>
            {}
          </div>
        </Form>
      </div>
    </Formik>
  );
}
