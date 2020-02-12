import React from "react";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import axiosWithAuth from "../Security/axiosWithAuth";

function LoginForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <h1>
        Welcome to the Login form
      </h1>
      <label>Please enter your username</label>
      <Field name="username" type="text" />
      {touched.username && errors.username && (
        <p>You must forgotten something. {errors.username}</p>
      )}
      <label> Please enter your password</label>
      <Field name="password" type="password" />
      {touched.password && errors.password && (
        <p>You must forgotten something. {errors.password}</p>
      )}
      <label>How long would you like to stay logged in for?</label>
      <Field component="select" name="tokenExpiration" className="typeSelection">
        <option value="1h">1 hour</option>
        <option value="2h">2 hours</option>
        <option value="12h">12 hours</option>
        <option value="1d">1 day</option>
        <option value="1w">1 week</option>
        <option value="2w">2 weeks</option>
        <option value="1m">1 month</option>
        <option value="2m">2 months</option>
        <option value="6m">6 months</option>
        <option value="1y">1 year</option>
        </Field>
      <button className="loginButton" type="submit">Submit</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password, tokenExpiration }) {
    return {
      username: username || "",
      password: password || "",
      expiration: tokenExpiration || "1h"
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("A Login name is required")
      .min(6, "A username must be at least 6 characters long"),
    password: Yup.string()
      .min(8, "A password must be at leat 8 characters long")
      .required("A password is required to continue")
  }),


  handleSubmit(values, { resetForm, setErrors, props }) {
    axiosWithAuth()
      .post("https://nihongo2go.herokuapp.com/users/login", values)
      .then(res => {
        //TAKE THIS OUT AFTER ITS WORKING
        // console.log(res.data.user.id);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userID", res.data.user.id);
        resetForm();
        props.history.push("/design");
      })
      .catch(rej => {
        // console.log("axios get reject");
        // console.log(rej);
        //props.history.push("/");
      });
  }
})(LoginForm);

export default FormikLoginForm;