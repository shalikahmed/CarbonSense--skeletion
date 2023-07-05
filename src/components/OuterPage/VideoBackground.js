import React from "react";
import "./VideoBackground.css";
import { useHistory } from "react-router-dom";
import logo from "./logo.png";
import sample from './video.mp4';
const VideoBackground = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login"); // Redirect to the dashboard page
  };
  return (
    <div className="video-background">
      <video className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>
      <div className="content">
        <div className="header">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="website-name">CarbonSense</h1>
          </div>
          <p className="quote">
            "Unleash your potential for positive change. CarbonSense: Empowering sustainability, one step at a time."
          </p>
        </div>
        <div className="buttons-container">
          <button className="btn-login"  onClick={handleLogin} >Login</button>
          <button className="btn-sign">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
