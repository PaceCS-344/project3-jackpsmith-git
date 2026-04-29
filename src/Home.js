import { Button } from './Button.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import cataclysm from "./images/Cataclysm.png"
import shaderSandbox from "./images/ShaderSandbox.png"
import pcr from "./images/PointCloudRenderer.png"


export const Home = () => (
  <div className="p-6 graybackground"><div className="page-container">
    <h2>Featured Projects</h2>

    <div className="flex-grid">
      <div className="col">
        <a href="https://www.github.com/jackpsmith-git/Cataclysm" target="_blank">
        <div className="shakecard">
          <img src={cataclysm} alt="" width="100%" />
          <h3 style={{ paddingTop: 12, textAlign: 'left' }}>Cataclysm (C/C++, C#, OpenGL, GLSL)</h3>
          <p>2D rendering & game development engine powered by OpenGL</p>
        </div>
        </a>
      </div>

      <div className="col">
        <a href="https://www.github.com/jackpsmith-git/ShaderSandbox" target="_blank">
        <div className="shakecard">
          <img src={shaderSandbox} alt="" width="100%" />
          <h3 style={{ paddingTop: 12, textAlign: 'left' }}>Shader Sandbox (C/C++, OpenGL, GLSL)</h3>
          <p>Portable Windows tool for testing GLSL shaders</p>
        </div>
        </a>
      </div>

      <div className="col">
        <a href="https://www.github.com/jackpsmith-git/PointCloudRenderer" target="_blank">
        <div className="shakecard">
          <img src={pcr} alt="" width="100%" />
          <h3 style={{ paddingTop: 12, textAlign: 'left' }}>Point-Cloud Renderer (C/C++, Vulkan, GLSL)</h3>
          <p>3D point-cloud Vulkan renderer</p>
        </div>
        </a>
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 15, paddingBottom: 15 }}><div className="shake"><Link to="/Projects"><Button><h3 style={{marginLeft: 12, marginRight: 12, marginTop: 8, marginBottom: 8}}>All Projects</h3></Button></Link></div></div>

    <hr style={{marginTop: 40}}/>

    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1>"You might not think that programmers are artists, but programming is an extremely creative profession."</h1>
      <h3 style={{ margin: 0 }}>- John Romero</h3>
      <p style={{ margin: 0, color: "GrayText" }}>Co-Founder, iD Software</p>
    </div>

  </div></div>
);