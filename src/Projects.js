import { Button } from './Button.js';

export const Projects = () => (
  <div className="p-6">
    <h2 className="text-3xl font-bold mb-4">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="card">
        <h3 className="font-semibold">Cataclysm Engine (C/C++, C#, OpenGL, GLSL)</h3>
        <p>Cataclysm is a Windows-only, 2D rendering and game development engine written in C++, based on Hazel Engine by Studio Cherno. Included with the Cataclysm Engine is Caterpillar, the visual editor for Cataclysm, as well as the Cataclysm Core Mono Library (CCML). The default renderer included with Cataclysm is Vesuvius, a custom-built 2D renderer that currently supports OpenGL. Cataclysm supports C# scripting with Mono, an open source implementation of .NET, as well as native scripting with C++.</p>
        <p>Features:</p>
        <ul className="list-disc pl-6">
            <li>C# Scripting with Mono</li>
            <li>Visual Editor (Caterpillar)</li>
            <li>2D Rendering with OpenGL</li>
            <li>Audio Rendering with miniaudio</li>
            <li>2D Physics and Collision Detection with Box2D</li>
            <li>Visual Profiler</li>
            <li>Frame Debugging</li>
        </ul>
        <Button className="mt-2" href="https://github.com/jackpsmith-git/Cataclysm">Source Code</Button>
      </div>
      <div className="card">
        <h3 className="font-semibold">Shader Sandbox (C/C++, OpenGL, GLSL)</h3>
        <p>Shader Sandbox is a portable Windows tool for testing GLSL shaders in an offline environment. Shader Sandbox supports OpenGL/GLSL 4.6.</p>
        <Button className="mt-2" href="https://github.com/jackpsmith-git/ShaderSandbox">Source Code</Button>
      </div>
      <div className="card">
        <h3 className="font-semibold">Point-Cloud Renderer (C/C++, Vulkan, GLSL)</h3>
        <p>3D, point-cloud, Vulkan renderer for Windows. Utilizes compute shaders to calculate, distribute, and render up to tens of millions of particles on the GPU. The binaries below contain a sample application that renders a small mesh with 10,000 particles.</p>
        <Button className="mt-2" href="https://github.com/jackpsmith-git/PointCloudRenderer">Source Code</Button>
      </div>
    </div>
  </div>
);