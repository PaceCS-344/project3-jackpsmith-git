import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import github from "./images/github.png"
import nuget from "./images/nuget.png"
import linkedin from "./images/linkedin.png"

export const Footer = () => (
  <nav className="footer">
    <div class="flex-grid">
        <div class="col">
            <div className="nav-links">
              <Link to="/"><h2 style={{marginBottom: 0}}>Jack P Smith</h2></Link>
            </div>            
            <h3>Software Developer</h3>
            <p style={{marginBottom: 0}} className="nav-links"><Link to="mailto:jackpsmith@jackpsmith.com">jackpsmith@jackpsmith.com</Link></p>
            <p style={{marginBottom: 20, marginTop: 0}} className="nav-links"><Link to="mailto:js99564p@pace.edu">js99564p@pace.edu</Link></p>
            <div class="row">
                <a style={{marginRight: 10}} href="https://github.com/jackpsmith-git">
                    <img src={github} height={40}></img>
                </a>
                <a style={{marginRight: 10}} href="https://www.linkedin.com/in/jackpetersmith">
                    <img src={linkedin} height={40}></img>
                </a>
                <a style={{marginRight: 10}} href="https://www.nuget.org/profiles/jackpsmith">
                    <img src={nuget} height={40}></img>
                </a>
            </div>
        </div>
        <div class="col">
            <p className="nav-links"><Link to="/home" href="/Home">Home</Link></p>
            <p className="nav-links"><Link to="/about">About</Link></p>
            <p className="nav-links"><Link to="/skills">Skills</Link></p>
            <p className="nav-links"><Link to="/projects">Projects</Link></p>
            <p className="nav-links"><Link to="/contact">Contact</Link></p>
        </div>
    </div>
  </nav>
);