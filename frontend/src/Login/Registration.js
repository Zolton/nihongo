import React from "react";
import FormikRegistrationForm from "./FormikRegistration"
import axiosWithAuth from "../Security/axiosWithAuth";

// Route = /registration

function Registration() {

    return (
<div>
      <p>Hello from Registration</p>
      <FormikRegistrationForm />
      </div>
    )
}

export default Registration