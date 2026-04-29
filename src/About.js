import headshot from "./images/headshot.jpeg"

export const About = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ maxWidth: '1000px' }}>
  <div className="p-6" style={{marginBottom: 40}}>
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img style={{margin: 20}} src={headshot} alt="Headshot" width={200}></img>
    </div>
    <p style={{textAlign: 'center'}}>
        Hi, I'm Jack. I am currently a student at Pace University pursuing a Bachelor of Science in Computer Science. 
    </p>
    <p style={{textAlign: 'center', marginBottom: 40}}>
      Click on the 'Projects' tab in the upper right to browse my current and past projects, or navigate to the 'Skills' page to learn more about me.
    </p>
    <div className="shakecard">
      <h3 style={{paddingTop: 15}}>Education</h3>
      <p style={{paddingLeft: 15, marginBottom: 0 }}><strong>Pace University, Seidenberg School of Computer Science and Information Systems</strong> | Pleasantville, NY</p>
      <p style={{paddingLeft: 15, marginTop: 0, marginBottom: 0 }}>Bachelor of Science (BS) in Computer Science</p>
      <p style={{paddingLeft: 15, marginTop: 0, marginBottom: 0}}><strong>GPA</strong>: 3.89 | <strong>Honors:</strong> Dean's List (First Honors) x2, Outstanding Academic Achievement Award, Tau Sigma National Honor Society</p>

      <p style={{paddingLeft: 15, marginBottom: 0 }}><strong>SUNY Westchester Community College, School of Business and Professional Careers</strong> | Valhalla, NY</p>
      <p style={{paddingLeft: 15, marginTop: 0, marginBottom: 0 }}>Associate of Applied Science (AAS) in Interactive Technologies, Concentration in Computer Animation and Game Design</p>
      <p style={{paddingLeft: 15, marginTop: 0, marginBottom: 0}}><strong>GPA</strong>: 3.44</p>

    </div>
  </div>
  </div>
  </div>
);