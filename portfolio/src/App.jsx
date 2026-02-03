import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyPortfolio</h2>
        <div className="nav-links">
          <button onClick={() => setActive("dashboard")}>Dashboard</button>
          <button onClick={() => setActive("profile")}>Profile</button>
          <button onClick={() => setActive("about")}>About</button>
        </div>
      </nav>

      {/* Content */}
      <div className="content">
        {active === "dashboard" && (
          <div className="card">
            <h2>Dashboard</h2>

            <section>
              <h4>Skills</h4>
              <p>HTML, CSS, JavaScript, React</p>
            </section>

            <section>
              <h4>Projects</h4>
              <p>Portfolio Website, Routing App, Todo App</p>
            </section>

            <section>
              <h4>Experience</h4>
              <p>Frontend Intern – 2 Months</p>
            </section>

            <section>
              <h4>Certifications</h4>
              <p>React Certification</p>
            </section>
          </div>
        )}

        {active === "profile" && (
          <div className="card">
            <h2>Profile</h2>
            <p><strong>Name:</strong> Swansh Shree</p>
            <p><strong>Role:</strong> Frontend Developer</p>
            <p><strong>Interests:</strong> Web Dev, AI, Music 🎵</p>
          </div>
        )}

        {active === "about" && (
          <div className="card">
            <h2>About Me</h2>
            <p>
              I am a passionate Computer Science student who loves building
              modern web applications with React. I also enjoy creating music
              and exploring AI technologies.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
