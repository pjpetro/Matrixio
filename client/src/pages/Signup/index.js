import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
import Container from "../../components/Container";
import HomeNav from "../../components/HomeNav";
import API from "../../utils/API";

function Signup() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      return;
    } else {
      let newTeacher = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      };
      API.createTeacher(newTeacher)
        .then(res => {
          //When the new user is created successfully, the redirect will be set to true and the page will redirected to the login page
          setRedirectToLogin(true);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      {/* When the new user is created, upon submit they will be redirected to the login page */}
      {redirectToLogin ? <Redirect to="/Login" /> : null}

      <HomeNav />
      <Container className="card-container">
        <div className="card signup-card">
          <div className="card-body text-center">
            <h5 className="card-title">Sign Up Form</h5>
            <form
              className="signup text-left"
              onSubmit={handleSubmit}
              action="/UserProfile"
            >
              <div className="form-group">
                <div className="form-group">
                  <label htmlFor="first-name-input">First Name:</label>
                  <input
                    type="username"
                    className="form-control"
                    id="first-name-input"
                    placeholder="First Name"
                    onChange={e => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name-input">Last Name:</label>
                  <input
                    type="username"
                    className="form-control"
                    id="last-name-input"
                    placeholder="Last Name"
                    onChange={e => setLastName(e.target.value)}
                  />
                </div>
                <label htmlFor="email-input">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-input"
                  placeholder="Email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password-input">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password-input"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <span
                className="glyphicon glyphicon-exclamation-sign"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Error:</span>{" "}
              <span className="msg"></span>
              <button type="submit" className="btn signup-btn">
                Sign Up
              </button>
              <p class="login-rte-link">
                {" "}
                Or log in <a href="/Login">here</a>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Signup;
