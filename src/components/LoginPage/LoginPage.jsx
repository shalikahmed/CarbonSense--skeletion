import  { useState } from "react";
import React from "react";
import { useHistory } from "react-router-dom";


const LoginPage = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/dashboard"); // Redirect to the dashboard page
  };
  const handleRegister = () => {
    history.push("/register"); // Redirect to the dashboard page
  };
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    if (email.trim() === "") {
      setEmailFocused(false);
    }
  };
  return (
    <div className="login-page">
    <div className="auth-form-container">
      <h2>SIGN IN</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className={`form-group ${emailFocused ? "focused" : ""}`}>
          {emailFocused ? (
            <label htmlFor="email">Email</label>
          ) : (
            <span className="placeholder">Email</span>
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder=""
            id="email"
            name="email"
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
          />
        </div>
        <div className={`form-group ${pass ? "focused" : ""}`}>
          {pass ? (
            <label htmlFor="password">Password</label>
          ) : (
            <span className="placeholder">Password</span>
          )}
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder=""
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className="sign-in-btn-login" onClick={handleLogin}>
          LOG IN
        </button>
      </form>
      <div className="register-link-container">
        <p>Not yet Registered?</p>
        <button
          className="register-link-btn"
          onClick={handleRegister}
        >
          SIGN UP
        </button>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
