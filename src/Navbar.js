import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Navbar = () => (
  <div style={{position: 'sticky', top: 0, zIndex: 100}}>
    <nav className="navbar">

      <div className="flex-grid">
        <div class="col">
            <div className="nav-links">
              <Link to="/"><h3>Jack P Smith</h3></Link>
            </div>
            <h1 className="logo">Software Developer</h1>
        </div>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  </div>
);