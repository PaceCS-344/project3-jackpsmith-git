import headshot from "./images/headshot.jpeg"

export const About = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ maxWidth: '1000px' }}>
  <div className="p-6">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img src={headshot} alt="Headshot" width={200}></img>
    </div>
    <p>
        Hi, I'm Jack. I am currently a student at Pace University pursuing a Bachelor of Science in Computer Science. 
    </p>
    <p>
      Click on the 'Projects' tab in the upper right to browse my current and past projects, or navigate to the 'Skills' page to learn more about me.
    </p>
  </div>
  </div>
  </div>
);