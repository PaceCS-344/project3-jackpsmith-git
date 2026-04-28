import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Footer = () => (
  <nav className="footer">
    <div class="flex-grid">
        <div class="col">
            <h1 className="logo">Jack P Smith</h1>
            <h1 className="logo">Software Developer</h1>
            <p className="nav-links"><Link to="mailto:jackpsmith@jackpsmith.com">jackpsmith@jackpsmith.com</Link></p>
            <p className="nav-links"><Link to="mailto:js99564p@pace.edu">js99564p@pace.edu</Link></p>
        </div>
        <div class="col">
            <p className="nav-links"><Link to="/home" href="/Home">Home</Link></p>
            <p className="nav-links"><Link to="/about">About</Link></p>
            <p className="nav-links"><Link to="/skills">Skills</Link></p>
            <p className="nav-links"><Link to="/projects">Projects</Link></p>
            <p className="nav-links"><Link to="/contact">Contact</Link></p>
        </div>
        <div class="col">
            <p className="nav-links"><Link to="https://github.com/jackpsmith-git">GitHub</Link></p>
            <p className="nav-links"><Link to="https://www.nuget.org/profiles/jackpsmith">NuGet</Link></p>
            <p className="nav-links"><Link to="https://www.linkedin.com/in/jackpetersmith/">LinkedIn</Link></p>
        </div>
    </div>
  </nav>
);