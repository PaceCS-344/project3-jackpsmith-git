import { useGitHubUser } from "./Effects/GitHub.js";
import { ThinParagraph } from "./Components/ThinParagraph.js";

import headshot from "./images/headshot.jpeg"
import github from "./images/github.png"

export const About = () => {
  const user = useGitHubUser();

  return (
  <div className="p-6"><div className="page-container">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><img style={{ margin: 20 }} src={headshot} alt="Headshot" width={200} /></div>
    {user && (<div><p style={{ textAlign: "center", paddingBottom: 0, marginBottom: 0, marginTop: 5 }}>{user.bio}</p></div>)}
    <p style={{ textAlign: "center", marginBottom: 40 }}>Click on the 'Projects' tab in the upper right to browse my current and past projects, or navigate to the 'Skills' page to learn more about me.</p>

    <div className="card">
      <h3 style={{ paddingTop: 15 }}>Education</h3>
      <p style={{ paddingLeft: 15, paddingRight: 15, marginBottom: 0 }}><strong>Pace University, Seidenberg School of Computer Science and Information Systems</strong> | Pleasantville, NY</p>
      <ThinParagraph>Bachelor of Science (BS) in Computer Science</ThinParagraph>
      <ThinParagraph><strong>GPA</strong>: 3.89 | <strong>Honors:</strong> Dean's List (First Honors) x2, Outstanding Academic Achievement Award, Tau Sigma National Honor Society</ThinParagraph>
      <p style={{ paddingLeft: 15, paddingRight: 15, marginBottom: 0 }}><strong>SUNY Westchester Community College, School of Business and Professional Careers</strong> | Valhalla, NY</p>
      <ThinParagraph>Associate of Applied Science (AAS) in Interactive Technologies, Concentration in Computer Animation and Game Design</ThinParagraph>
      <ThinParagraph><strong>GPA</strong>: 3.44</ThinParagraph>
    </div>

    {user && (
      <div className="insetcard" style={{marginBottom: 40, marginTop: 40}}>
        <a href="https://www.github.com/jackpsmith-git" target="_blank"><div className="shake"><img src={github} style={{display: 'block', margin: '0 auto', width: '10%', height: '10%'}}></img></div></a>
        <p style={{ textAlign: "center", paddingBottom: 0, marginBottom: 0 }}>{user.username}</p>
        <p style={{ textAlign: "center", paddingBottom: 0, marginBottom: 0, marginTop: 5 }}>Followers: {user.followersCount} | ★ {user.starredReposCount}</p>
      </div>
    )}
  </div></div>
  );
};