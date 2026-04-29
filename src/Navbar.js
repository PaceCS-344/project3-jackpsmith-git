import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Navbar = () => (
  <div style={{position: 'sticky', top: 0, zIndex: 100}}>
    <div className="navbar">
    <nav className="navbarcontent">
      <div className="flex-grid" style={{marginTop: 5, marginBottom: 5}}>
        <div class="col">
            <div className="nav-links">
              <Link to="/"><h2 style={{marginBottom: 0, marginTop: 0, marginLeft: 0, textAlign: 'left'}}>Jack P Smith</h2></Link>
            </div>
            <h3 style={{marginLeft: 0, marginRight: 0, textAlign: 'left'}}>Software Developer</h3>
        </div>
      </div>
      <div className="hf-nav-links" style={{marginLeft: 'auto'}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
    </div>
  </div>
);