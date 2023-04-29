import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, input } from "react-bootstrap";
const SignIn = () => {
  return (
    <div className="login-body">
      <div className="center-item">
        <h1>Sign in User</h1>
      </div>
      <h5>Full Name</h5>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Full Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <h5>User Email</h5>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <h5>Password</h5>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Password"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="center-item">
        <Button>Sign in</Button>
      </div>
    </div>
  );
};

export default SignIn;
