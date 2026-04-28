import mail from "./images/mail.png"
import github from "./images/github.png"
import linkedin from "./images/linkedin.png"
import nuget from "./images/nuget.png"

export const Contact = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ maxWidth: '1000px' }}>
  <div className="p-6">
    <h2 className="text-3xl font-bold mb-4">Contact</h2>
    <div className="floatingtile">
      <p><img src={mail} style={{ verticalAlign: 'middle' }} width="5%"></img> <a href="mailto:jackpsmith@jackpsmith.com">jackpsmith@jackpsmith.com</a></p>
      <p><img src={mail} style={{ verticalAlign: 'middle' }} width="5%"></img> <a href="mailto:js99564p@pace.edu">js99564p@pace.edu</a></p>
      <p><img src={linkedin} style={{ verticalAlign: 'middle' }} width="5%"></img> <a href="https://linkedin.com/in/jackpetersmith">linkedin.com/in/jackpetersmith</a></p>
      <p><img src={github} style={{ verticalAlign: 'middle' }} width="5%"></img> <a href="https://github.com/jackpsmith-git">github.com/jackpsmith-git</a></p>
      <p><img src={nuget} style={{ verticalAlign: 'middle' }} width="5%"></img> <a href="https://www.nuget.org/profiles/jackpsmith">nuget.org/profiles/jackpsmith</a></p>
    </div>
  </div>
  </div>
  </div>
);