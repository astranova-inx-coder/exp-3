import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import profileImage from "./assets/ME & YOU poster.jpg";

function Profile() {
  return (
    <div className="content">
      <h2>Profile Page</h2>

      <img
        src={profileImage}
        alt="Profile"
        className="profile-img"
      />

      <h3>Projects</h3>
      <ol>
        <li>Fake News Chatbot</li>
        <li>Real-time Chat Application</li>
      </ol>

      <h3>Achievements</h3>
      <p>Certified Full Stack Developer</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="content">
      <h2>Dashboard</h2>

      <h3>Skills</h3>
      <ol>
        <li>Java</li>
        <li>Python</li>
        <li>SQL</li>
        <li>MERN Stack</li>
      </ol>

      <h3>About Me</h3>
      <p>
        I am a full-stack developer interested in building scalable web
        applications and learning new technologies.
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="navbar">
          <h2 className="logo">MyProfile</h2>
          <div className="links">
            <Link to="/">Profile</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
