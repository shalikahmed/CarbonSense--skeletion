import React, { useState } from "react";
import { useHistory } from "react-router-dom";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const history = useHistory();

  const gotoLogin = () => {
    history.push("/login"); // Redirect to the dashboard page
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="signup-page">
        <div className="auth-form-container">
            <h2>SIGN UP</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name"></label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
                <label htmlFor="email"></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />
                <label htmlFor="password"></label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Confirm password" id="password" name="password" />
                <button className="sign-up-link" type="submit">SIGN UP</button>
            </form>
            <div className="login-link-container">
                <p>Already have an account?</p>
                <button className="login-link-btn" onClick={gotoLogin}>SIGN IN</button>
            </div>
        </div>
        </div>
    )
}
export default Register;