import React, { useState, useEffect } from 'react';

import { Button } from './Button.js';
// import cataclysm from "./images/cataclysm.png";
// import shaderSandbox from "./images/shaderSandbox.png";
// import pcr from "./images/pointcloudrenderer.png";
// import forge from "./images/forge.png";
import github from "./images/github.png"

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/jackpsmith-git/repos?sort=updated&per_page=5"
        );
        const data = await res.json();

        const enriched = await Promise.all(
          data.map(async (repo) => {
            const [languagesRes] =
              await Promise.all([
                fetch(repo.languages_url),
                // fetch(repo.contributors_url),
                // fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/releases`),
                // fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/tags`)
              ]);

            const languages = await languagesRes.json();
            // const contributors = await contributorsRes.json();
            // const releases = await releasesRes.json();
            // const tags = await tagsRes.json();

            return {
              name: repo.name,
              description: repo.description,
              url: repo.html_url,
              stars: repo.stargazers_count,
              watchers: repo.watchers_count,
              issues: repo.open_issues_count,
              languages: Object.keys(languages),
              // collaborators: contributors.map((c) => c.login),
              // releases: releases.map((r) => r.name),
              // tags: tags.map((t) => t.name),
            };
          })
        );

        setRepos(enriched);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRepos();
  }, []);

  return (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ maxWidth: '1000px' }}>
  <div className="p-6">
    <h2 className="text-3xl font-bold mb-4">Projects</h2>
    {/* <pre>{JSON.stringify(repos, null, 2)}</pre>
    <div>
      {repos.forEach(repo => {
        <p>repo[0];</p>
      });}
    </div> */}

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <Accordion key={repo.name}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>
                  <h3 style={{margin: 0, textAlign: 'left'}} className="font-semibold">
                    {repo.name}
                  </h3>
                </span>
                <span>
                  <p style={{ paddingLeft: 10, margin: 0, textAlign: 'left'}}>({repo.languages.slice(0, 8).join(", ")})</p>
                </span>
              </div>
            </AccordionSummary>

            <AccordionDetails>
              <hr></hr>
              <p>{repo.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>
                  <a href={repo.url}>
                    <img style={{opacity: .8}} src={github} height={35}></img>
                  </a>
                  {/* <Button className="mt-2" href={repo.url}>
                    Source Code
                  </Button> */}
                </span>
                <span>
                  <div style={{ margin: 0, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <span style={{paddingRight: 10, alignItems: 'center'}}><strong style={{ display: 'inline-block', width: 16, textAlign: 'center' }}>★</strong> {repo.stars}</span>
                    <span style={{paddingRight: 10, alignItems: 'center'}}><strong style={{ display: 'inline-block', width: 16, textAlign: 'center' }}>👁</strong> {repo.watchers}</span>
                    <span style={{alignItems: 'center'}}><strong style={{ display: 'inline-block', width: 16, textAlign: 'center' }}>⚠</strong> {repo.issues}</span>
                  </div>
                </span>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>


    {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Accordion defaultExpanded slotProps={{ heading: { component: 'h2' } }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                
            >
              <div className="flex-grid">
                <img src={cataclysm} alt="Screenshot of Cataclysm Engine." width={150}></img>
                <h3 style={{paddingTop: 20, paddingBottom: 5}} className="font-semibold">Cataclysm Engine (C/C++, C#, OpenGL, GLSL)</h3>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p style={{marginTop: 0}}>Cataclysm is a Windows-only, 2D rendering and game development engine written in C++, based on Hazel Engine by Studio Cherno. Included with the Cataclysm Engine is Caterpillar, the visual editor for Cataclysm, as well as the Cataclysm Core Mono Library (CCML). The default renderer included with Cataclysm is Vesuvius, a custom-built 2D renderer that currently supports OpenGL. Cataclysm supports C# scripting with Mono, an open source implementation of .NET, as well as native scripting with C++.</p>
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
            </AccordionDetails>
        </Accordion>
        
        <Accordion slotProps={{ heading: { component: 'h2' } }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                
            >
              <div className="flex-grid">
                <img src={shaderSandbox} alt="Screenshot of Shader Sandbox." width={150}></img>
                <h3 style={{paddingTop: 20, paddingBottom: 5}} className="font-semibold">Shader Sandbox (C/C++, OpenGL, GLSL)</h3>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p style={{marginTop: 0}}>Shader Sandbox is a portable Windows tool for testing GLSL shaders in an offline environment. Shader Sandbox supports OpenGL/GLSL 4.6.</p>
              <Button className="mt-2" href="https://github.com/jackpsmith-git/ShaderSandbox">Source Code</Button>
            </AccordionDetails>
        </Accordion>

        <Accordion slotProps={{ heading: { component: 'h2' } }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                
            >
              <div className="flex-grid">
                <img src={pcr} alt="Screenshot of point cloud renderer." width={150}></img>
                <h3 style={{paddingTop: 20, paddingBottom: 5}} className="font-semibold">Point-Cloud Renderer(C/C++, Vulkan, GLSL)</h3>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p style={{marginTop: 0}}>3D, point-cloud, Vulkan renderer for Windows. Utilizes compute shaders to calculate, distribute, and render up to tens of millions of particles on the GPU. The binaries below contain a sample application that renders a small mesh with 10,000 particles.</p>
              <Button className="mt-2" href="https://github.com/jackpsmith-git/PointCloudRenderer">Source Code</Button>
            </AccordionDetails>
        </Accordion>

        <Accordion slotProps={{ heading: { component: 'h2' } }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                
            >
              <div className="flex-grid">
                <img src={forge} alt="Forge logo." width={150}></img>
                <h3 style={{paddingTop: 20, paddingBottom: 5}} className="font-semibold">Forge Password Management Utility (C#, WinForms)</h3>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p style={{marginTop: 0}}>Forge is a portable password management utility for Windows 10/11.</p>
              <p>Forge stores your data in encrypted files called vaults. Vaults live in a subdirectory alongside the executable so that you always have control over your own data. Forge collects no user data. When you give Forge your sensitive data, it is never written to disk in an unencrypted state. Forge serializes and encrypts the vault data in memory before writing to disk, and can only decrypt the data if the correct AES key is provided.</p>
              <Button className="mt-2" href="https://github.com/jackpsmith-git/Forge">Source Code</Button>
            </AccordionDetails>
        </Accordion>
      </div>
    </div> */}
  </div>
  </div>
  </div>
  );
};