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

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Skills = () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ maxWidth: '1000px' }}>
    <div className="p-6">
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
                <div className="flex-grid">
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img style={{margin: 0}} src={cpp} width="100%"></img>
                            <h2 style={{margin: 0}} >C/C++</h2>
                        </div>
                        <div className="insetcard">
                            <img style={{margin: 0}} src={javascript} width="100%"></img>
                            <h2 style={{margin: 0}} >JavaScript</h2>
                        </div>
                        <div className="insetcard">
                            <img style={{margin: 0}} src={lua} width="100%"></img>
                            <h2 style={{margin: 0}} >Lua</h2>
                        </div>
                    </div>
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img style={{margin: 0}} src={csharp} width="100%"></img>
                            <h2 style={{margin: 0}} >C#</h2>
                        </div>
                        <div className="insetcard">
                            <img style={{margin: 0}} src={html} width="100%"></img>
                            <h2 style={{margin: 0}} >HTML</h2>
                        </div>
                    </div>
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img style={{margin: 0}} src={java} width="100%"></img>
                            <h2 style={{margin: 0}} >Java</h2>
                        </div>
                        <div className="insetcard">
                            <img style={{margin: 0}} src={css} width="100%"></img>
                            <h2 style={{margin: 0}} >CSS</h2>
                        </div>
                    </div>
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img style={{margin: 0}} src={python} width="100%"></img>
                            <h2 style={{margin: 0}} >Python</h2>
                        </div>
                        <div className="insetcard">
                            <img style={{margin: 0}} src={php} width="100%"></img>
                            <h2 style={{margin: 0}} >PHP</h2>
                        </div>
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
                <div className="flex-grid">
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img style={{margin: 0}} src={opengl} width="100%"></img>
                            <h2 style={{margin: 0}} >OpenGL</h2>
                        </div>
                        <div className="insetcard">
                            <img style={{margin: 0}}  src={dotnet} width="100%"></img>
                            <h2 style={{margin: 0}} >.NET/ASP.NET</h2>
                        </div>
                    </div>
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img style={{margin: 0}}  src={vulkan} width="100%"></img>
                            <h2 style={{margin: 0}} >Vulkan</h2>
                        </div>
                        <div className="insetcard">
                            <img style={{margin: 0}}  src={nodejs} width="100%"></img>
                            <h2 style={{margin: 0}} >node.js</h2>
                        </div>
                    </div>
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img style={{margin: 0}}  src={react} width="100%"></img>
                            <h2 style={{margin: 0}} >React</h2>
                        </div>
                    </div>
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img style={{margin: 0}}  src={bootstrap} width="100%"></img>
                            <h2 style={{margin: 0}} >Bootstrap</h2>
                        </div>
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
                <div className="flex-grid">
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img style={{margin: 0}} src={visualstudio} width="100%"></img>
                            <h3 style={{margin: 0}} >Visual Studio 2022/2026</h3>
                        </div>
                        <div className="insetcard">
                            <img style={{margin: 0}} src={docker} width="100%"></img>
                            <h2 style={{margin: 0}} >Docker</h2>
                        </div>
                    </div>
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img  style={{margin: 0}} src={vscode} width="100%"></img>
                            <h2 style={{margin: 0}} >Visual Studio Code</h2>
                        </div>
                        <div className="insetcard">
                            <img style={{margin: 0}}  src={unity} width="100%"></img>
                            <h2 style={{margin: 0}} >Unity</h2>
                        </div>
                    </div>
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img style={{margin: 0}}  src={git} width="100%"></img>
                            <h2 style={{margin: 0}} >Git</h2>
                        </div>
                        <div className="insetcard">
                            <img style={{margin: 0}}  src={mysql} width="100%"></img>
                            <h2 style={{margin: 0}} >MySQL/ MariaDB</h2>
                        </div>
                    </div>
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img style={{margin: 0}}  src={github} width="100%"></img>
                            <h2 style={{margin: 0}} >GitHub</h2>
                        </div>
                        <div className="insetcard">
                            <img style={{margin: 0}}  src={cmake} width="100%"></img>
                            <h2 style={{margin: 0}} >CMake</h2>
                        </div>
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
                <div className="flex-grid">
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img style={{margin: 0}}  src={windows} width="100%"></img>
                            <h2 style={{margin: 0}} >Windows</h2>
                        </div>
                    </div>
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img style={{margin: 0}}  src={android} width="100%"></img>
                            <h2 style={{margin: 0}} >Android</h2>
                        </div>
                    </div>
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img style={{margin: 0}}  src={linux} width="100%"></img>
                            <h2 style={{margin: 0}} >Unix/Linux</h2>
                        </div>
                    </div>
                    <div className="skinnycol">
                        <div className="insetcard">
                            <img style={{margin: 0}}  src={apple} width="100%"></img>
                            <h2 style={{margin: 0}} >MacOS</h2>
                        </div>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    </div>
    </div>
    </div>
);