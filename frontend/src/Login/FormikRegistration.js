import React from "react";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import axiosWithAuth from "../Security/axiosWithAuth";

function RegistrationForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <h1>Welcome to the Registration form</h1>
      <label>Please enter your username</label>
      <Field name="username" type="text" />
      {touched.username && errors.username && <p>Sorry! {errors.username}</p>}
      <label> Please enter your password</label>
      <Field name="password" type="password" />
      {touched.password && errors.password && <p>Sorry! {errors.password}</p>}
      <label> Optional: Enter your email so we can keep you up to date on new features</label>
      <Field name="email" type="email" />
      {touched.email && errors.email && <p>Sorry! {errors.email}</p>}
      <button className="loginButton" type="submit">Submit</button>
    </Form>
  );
}

const FormikRegistrationForm = withFormik({
  mapPropsToValues({ username, password, email }) {
    return {
      username: username || "",
      password: password || "",
      email: email || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("A Login name is required")
      .min(6, "A username must be at least 5 characters long"),
    password: Yup.string()
      .min(8, "A password must be at leat 5 characters long")
      .required("A password is required to continue")
  }),

  handleSubmit(values, { resetForm, setErrors, props }) {
    axiosWithAuth()
      .post("https://nihongo2go.herokuapp.com/users/register", values)
      .then(res => {
        // console.log("axios post res");
        // console.log(res);
        console.log("Info submitted")
        props.history.push("/login");
        resetForm();
      })
      .catch(reject => {
        // TAKE THIS OUT AFTER ITS WORKING - SECURITY RISK
        //  console.log("axios post rejection");
        console.log(reject);
        console.log("Info NOT submitted")
      });
  }
})(RegistrationForm);

export default FormikRegistrationForm;