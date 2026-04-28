import cataclysm from "./images/cataclysm.png"
import shaderSandbox from "./images/shaderSandbox.png"
import pcr from "./images/pointcloudrenderer.png"
import { Button } from './Button.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Home = () => (
  <div className="p-6 graybackground">
    <homepagebody>
      <div>
        <div style={{padding: 40}}>
          <h2>Featured Projects</h2>
          <div className="flex-grid">
            <div className="col">
              <div className="shakecard">
                <img src={cataclysm} alt="Screenshot of Cataclysm Engine." width="100%"></img>
                <h3 style={{paddingTop: 12}}>Cataclysm (C/C++, C#, OpenGL, GLSL)</h3>
                <p>2D rendering & game development engine powered by OpenGL</p>
              </div>
            </div>
            <div className="col">
              <div className="shakecard">
                <img src={shaderSandbox} alt="Screenshot of Shader Sandbox." width="100%"></img>
                <h3 style={{paddingTop: 12}}>Shader Sandbox (C/C++, OpenGL, GLSL)</h3>
                <p>Portable Windows tool for testing GLSL shaders in an offline environment</p>
              </div>
            </div>
            <div className="col">
              <div className="shakecard">
                <img src={pcr} alt="Screenshot of Point-Cloud Renderer." width="100%"></img>
                <h3 style={{paddingTop: 12}}>Point-Cloud Renderer (C/C++, Vulkan, GLSL)</h3>
                <p>3D, point-cloud, Vulkan renderer for Windows</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '60px', maxWidth: '1000px' }}>
          <h1>"You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity."</h1>
          <h3 style={{ padding: '5', margin: '0' }}>- John Romero</h3>
          <p style={{ padding: '0', margin: '0', color: "GrayText" }}>Co-Founder, iD Softare</p>
        </div>
      </div>
    </homepagebody>
  </div>
);