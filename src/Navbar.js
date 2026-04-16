import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">Jack P Smith</h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);