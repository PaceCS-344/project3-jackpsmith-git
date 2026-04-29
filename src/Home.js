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
        <div className="shakecard">
          <img src={cataclysm} alt="" width="100%" />
          <h3 style={{ paddingTop: 12, textAlign: 'left' }}>Cataclysm (C/C++, C#, OpenGL, GLSL)</h3>
          <p>2D rendering & game development engine powered by OpenGL</p>
        </div>
      </div>

      <div className="col">
        <div className="shakecard">
          <img src={shaderSandbox} alt="" width="100%" />
          <h3 style={{ paddingTop: 12, textAlign: 'left' }}>Shader Sandbox (C/C++, OpenGL, GLSL)</h3>
          <p>Portable Windows tool for testing GLSL shaders</p>
        </div>
      </div>

      <div className="col">
        <div className="shakecard">
          <img src={pcr} alt="" width="100%" />
          <h3 style={{ paddingTop: 12, textAlign: 'left' }}>Point-Cloud Renderer (C/C++, Vulkan, GLSL)</h3>
          <p>3D point-cloud Vulkan renderer</p>
        </div>
      </div>
    </div>  

    <hr />

    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1>"You might not think that programmers are artists, but programming is an extremely creative profession."</h1>
      <h3 style={{ margin: 0 }}>- John Romero</h3>
      <p style={{ margin: 0, color: "GrayText" }}>Co-Founder, iD Software</p>
    </div>

  </div></div>
);