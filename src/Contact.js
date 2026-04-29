import github from "./images/github.png"
import linkedin from "./images/linkedin.png"
import nuget from "./images/nuget.png"
import headshot from "./images/headshot.jpeg"

import { Shake } from './Components/Shake.js';
import { CenteredRow } from "./Components/CenteredRow.js";

export const Contact = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ maxWidth: '1000px' }}><div className="p-6" style={{marginBottom: 40}}>
    <h2 className="text-3xl font-bold mb-4">Contact</h2>
    <div className="floatingtile">
      <img style={{borderRadius: '90%', aspectRatio: 1/1, objectFit: 'cover', objectPosition: 'top', width: 100}} src={headshot}></img>
      <h3 style={{padding: 15}}>Jack P Smith</h3>
      <p className="footer-link"><a href="mailto:jackpsmith@jackpsmith.com" target="_blank">jackpsmith@jackpsmith.com</a></p>
      <p className="footer-link"><a href="mailto:js99564p@pace.edu" target="_blank">js99564p@pace.edu</a></p>
      <p className="footer-link"><a href="mailto:jpsmith8603@gmail.com" target="_blank">jpsmith8603@gmail.com</a></p>

      <CenteredRow>
        <Shake><a style={{ marginRight: 10 }} href="https://github.com/jackpsmith-git" target="_blank"><img src={github} height={40} /></a></Shake>
        <Shake><a style={{ marginRight: 10 }} href="https://www.linkedin.com/in/jackpetersmith" target="_blank"><img src={linkedin} height={40} /></a></Shake>
        <Shake><a href="https://www.nuget.org/profiles/jackpsmith" target="_blank"><img src={nuget} height={40} /></a></Shake>
      </CenteredRow>
    </div>
  </div></div></div>
);