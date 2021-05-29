import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import FormButton from "../InnerComponents/FormButton.jsx";
import fbIcon from "../../assets/images/sosial-media-icons/facebook-icon.svg";
import SecondPage from "./SecondPage.jsx";

export default function FormStepOne() {
  const [redirect, setRedirect] = useState(false);

  const initialValueOne = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    acceptTerms: false,
  };

  const onSubmitOne = (values) => {
    console.log("form data", values);
    setRedirect(true);
  };

  console.log(redirect);

  const validationSchemaOne = Yup.object().shape({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .required("Required")
      .max(8, "Length of Password must be 8")
      .matches(
        "^(?=.*\\d)",
        "Password must contain at least one numeric character"
      )
      .matches("^(?=.*[A-Z])", "Password must contain at least one uppercase")
      .matches(
        "(?=.*[-+_!@#$%^&*., ?])",
        "Password must contain at least one special character"
      ),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Please Agree the Terms & Conditions"
    ),
  });

  return (
    <>
      {redirect ? (
        <SecondPage />
      ) : (
        <Formik
          initialValues={initialValueOne}
          validationSchema={validationSchemaOne}
          onSubmit={onSubmitOne}
        >
          <div className="form-box">
            <Form>
              <div className="form-control">
                <label htmlFor="firstname">First name</label>
                <Field
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First name"
                />
                <div className="error-box">
                  <ErrorMessage name="firstname" />
                </div>
              </div>

              <div className="form-control">
                <label htmlFor="lastname">Last name</label>
                <Field
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last name"
                />
                <div className="error-box">
                  <ErrorMessage name="lastname" />
                </div>
              </div>

              <div className="form-control">
                <label htmlFor="email">Email address</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                />
                <div className="error-box">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="form-control">
                <label htmlFor="password">Create password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create password"
                />
                <div className="error-box">
                  <ErrorMessage name="password" />
                </div>
              </div>

              <div className="form-control checkbox-control">
                <Field type="checkbox" id="terms" name="acceptTerms" />
                <label htmlFor="acceptTerms">
                  By clicking «Continue» you agree to our Terms, Cookies Policy
                  and Privacy Policy. You may receive email and SMS
                  notifications from us and can opt out at any time.
                </label>
              </div>
              <div className="error-box">
                <ErrorMessage name="acceptTerms" />
              </div>

              <FormButton text="CONTINUE" bgcolor="#86c306" />
              <FormButton
                text="SIGN UP VIA FACEBOOK"
                bgcolor="#3c5a9a"
                picture={fbIcon}
                alter="fb-icon"
              />
            </Form>
          </div>
        </Formik>
      )}
    </>
  );
}
