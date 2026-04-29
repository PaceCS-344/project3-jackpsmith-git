import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import github from "./images/github.png"
import nuget from "./images/nuget.png"
import linkedin from "./images/linkedin.png"

export const Footer = () => (
  <div className="footer">
  <nav className="footercontent">
    <div className="flex-grid" style={{marginTop: 20, marginBottom: 60}}>        
        <div className="col">
            <div className="nav-links"><Link to="/"><h2 style={{marginBottom: 0}}>Jack P Smith</h2></Link></div>            
            <h3 style={{textAlign: 'left'}}>Software Developer</h3>
            <p style={{marginBottom: 0}} className="nav-links"><Link to="mailto:jackpsmith@jackpsmith.com">jackpsmith@jackpsmith.com</Link></p>
            <p style={{marginBottom: 0, marginTop: 0}} className="nav-links"><Link to="mailto:js99564p@pace.edu">js99564p@pace.edu</Link></p>
            <p style={{marginBottom: 20, marginTop: 0}} className="nav-links"><Link to="mailto:jpsmith8603@gmail.com">jpsmith8603@gmail.com</Link></p>
            <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="shake">
                    <a style={{ marginRight: 10 }} href="https://github.com/jackpsmith-git" target="_blank">
                        <img src={github} height={40} />
                    </a>
                </div>
                <div className="shake">
                    <a style={{ marginRight: 10 }} href="https://www.linkedin.com/in/jackpetersmith" target="_blank">
                        <img src={linkedin} height={40} />
                    </a>
                </div>
                <div className="shake">
                    <a href="https://www.nuget.org/profiles/jackpsmith" target="_blank">
                        <img src={nuget} height={40} />
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div
        style={{
            marginLeft: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'top',
            alignItems: 'flex-end'
        }}
        >
        <div className="nav-links" style={{marginBottom: 10}}><Link to="/">Home</Link></div>
        <div className="nav-links" style={{marginBottom: 10}}><Link to="/about">About</Link></div>
        <div className="nav-links" style={{marginBottom: 10}}><Link to="/skills">Skills</Link></div>
        <div className="nav-links" style={{marginBottom: 10}}><Link to="/projects">Projects</Link></div>
        <div className="nav-links" style={{marginBottom: 10}}><Link to="/contact">Contact</Link></div>
    </div>
  </nav>
  </div>
);