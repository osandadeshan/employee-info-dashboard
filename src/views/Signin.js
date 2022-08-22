import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Signin.css";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  console.log("auth", localStorage.getItem("isAuthenticated"));

  console.log(username, password);

  const handleSubmit = (e) => {
    e.preventDefault();
    // If username or password field is empty, return an error message
    if (username === "" || password === "") {
      setErrorMessage((prevState) => ({
        value: "Username or password is empty.",
      }));
    } else if (username == "admin" && password == "1qaz2wsx@A") {
      // Signin successfull
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/";
    } else {
      // If credentials entered is invalid, return an error message
      setErrorMessage((prevState) => ({ value: "Incorrect username or password." }));
    }
  };

  return (
    <div className="text-center">
      <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">
              <i
                className="fa fa-user-circle"
                style={{ fontSize: "110px" }}
              ></i>
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-secondary btn-block"
              >
                LOGIN
              </button>
              <div className="message"></div>
              {errorMessage.value && (
                <p className="text-danger"> {errorMessage.value} </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
