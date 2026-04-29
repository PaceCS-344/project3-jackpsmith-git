import cpp from "./images/cpp.png"
import csharp from "./images/csharp.png"
import java from "./images/java.png"
import python from "./images/python.png"
import javascript from "./images/javascript.png"
import html from "./images/html.png"
import css from "./images/css.png"
import php from "./images/php.png"
import lua from "./images/lua.png"
import opengl from "./images/opengl.png"
import nodejs from "./images/nodejs.png"
import react from "./images/react.png"
import bootstrap from "./images/bootstrap.png"
import vulkan from "./images/vulkan.png"
import dotnet from "./images/dotnet.png"
import visualstudio from "./images/visualstudio.png"
import vscode from "./images/vscode.png"
import git from "./images/git.png"
import github from "./images/github.png"
import unity from "./images/unity.png"
import docker from "./images/docker.png"
import mysql from "./images/mysql.png"
import cmake from "./images/cmake.png"
import windows from "./images/windows.png"
import linux from "./images/linux.png"
import apple from "./images/apple.png"
import android from "./images/android.png"
import fastapi from "./images/FastAPI.png"

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Badge from '@mui/material/Badge';

export const Skills = () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ maxWidth: '1000px' }}>
    <div className="p-6" style={{marginBottom: 40}}>
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <Accordion defaultExpanded slotProps={{ heading: { component: 'h2' } }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                
            >
                <h3>Programming Languages</h3>
            </AccordionSummary>
            <AccordionDetails>
                <div className="skills-grid">
                <div className="insetcard">
                    <img src={cpp} width="100%" />
                    <h2>C/C++</h2>
                </div>

                <div className="insetcard">
                    <img src={python} width="100%" />
                    <h2>Python</h2>
                </div>

                <div className="insetcard">
                    <img src={java} width="100%" />
                    <h2>Java</h2>
                </div>

                <div className="insetcard">
                    <img src={csharp} width="100%" />
                    <h2>C#</h2>
                </div>

                <div className="insetcard">
                    <img src={javascript} width="100%" />
                    <h2>JavaScript</h2>
                </div>

                <div className="insetcard">
                    <img src={html} width="100%" />
                    <h2>HTML</h2>
                </div>

                <div className="insetcard">
                    <img src={css} width="100%" />
                    <h2>CSS</h2>
                </div>

                <div className="insetcard">
                    <img src={lua} width="100%" />
                    <h2>Lua</h2>
                </div>

                <div className="insetcard">
                    <img src={php} width="100%" />
                    <h2>PHP</h2>
                </div>
                </div>
            </AccordionDetails>
        </Accordion>

        <Accordion slotProps={{ heading: { component: 'h2' } }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <h3>Frameworks/Libraries</h3>
            </AccordionSummary>
            <AccordionDetails>
                <div className="skills-grid">
                <div className="insetcard">
                    <img src={opengl} width="100%" />
                    <h2>OpenGL</h2>
                </div>

                <div className="insetcard">
                    <img src={vulkan} width="100%" />
                    <h2>Vulkan</h2>
                </div>

                <div className="insetcard">
                    <img src={react} width="100%" />
                    <h2>React</h2>
                </div>

                <div className="insetcard">
                    <img src={bootstrap} width="100%" />
                    <h2>Boostrap</h2>
                </div>

                <div className="insetcard">
                    <img src={dotnet} width="100%" />
                    <h2>.NET/ASP.NET</h2>
                </div>

                <div className="insetcard">
                    <img src={nodejs} width="100%" />
                    <h2>node.js</h2>
                </div>

                <div className="insetcard">
                    <img src={fastapi} width="100%" />
                    <h2>FastAPI</h2>
                </div>
                </div>
            </AccordionDetails>
        </Accordion>

        <Accordion slotProps={{ heading: { component: 'h2' } }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
            >
                <h3>Development Tools</h3>
            </AccordionSummary>
            <AccordionDetails>
                <div className="skills-grid">
                <div className="insetcard">
                    <img src={visualstudio} width="100%" />
                    <h2>Visual Studio</h2>
                </div>
                <div className="insetcard">
                    <img src={vscode} width="100%" />
                    <h2>VS Code</h2>
                </div>
                <div className="insetcard">
                    <img src={git} width="100%" />
                    <h2>Git</h2>
                </div>
                <div className="insetcard">
                    <img src={github} width="100%" />
                    <h2>GitHub</h2>
                </div>
                <div className="insetcard">
                    <img src={unity} width="100%" />
                    <h2>Unity</h2>
                </div>
                <div className="insetcard">
                    <img src={docker} width="100%" />
                    <h2>Docker</h2>
                </div>
                <div className="insetcard">
                    <img src={mysql} width="100%" />
                    <h2>MySQL/MariaDB</h2>
                </div>
                <div className="insetcard">
                    <img src={cmake} width="100%" />
                    <h2>CMake</h2>
                </div>
                </div>
            </AccordionDetails>
        </Accordion>

        <Accordion slotProps={{ heading: { component: 'h2' } }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4-content"
                id="panel4-header"
            >
                <h3>Operating Systems</h3>
            </AccordionSummary>
            <AccordionDetails>
                <div className="skills-grid">
                    <div className="insetcard">
                        <img src={windows} width="100%" />
                        <h2>Windows</h2>
                    </div>
                    <div className="insetcard">
                        <img src={linux} width="100%" />
                        <h2>Unix/Linux</h2>
                    </div>
                    <div className="insetcard">
                        <img src={apple} width="100%" />
                        <h2>MacOS</h2>
                    </div>
                    <div className="insetcard">
                        <img src={android} width="100%" />
                        <h2>Android</h2>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    </div>
    </div>
    </div>
);