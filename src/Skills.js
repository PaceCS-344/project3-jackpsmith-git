import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Badge from '@mui/material/Badge';

import { Shake } from './Components/Shake.js';

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
import tailwind from "./images/tailwind.png"
import vulkan from "./images/vulkan.png"
import dotnet from "./images/dotnet-logo.png"
import fastapi from "./images/FastAPI.png"

import visualstudio from "./images/visualstudio.png"
import vscode from "./images/vscode.png"
import git from "./images/git.png"
import github from "./images/github.png"
import unity from "./images/unity.png"
import docker from "./images/docker.png"
import mysql from "./images/mysql.png"
import cmake from "./images/cmake.png"
import claude from "./images/claude-color.png"

import windows from "./images/windows.png"
import linux from "./images/linux.png"
import apple from "./images/apple.png"
import android from "./images/android.png"

const PROGRAMMING_LANGUAGES = {
  "C/C++" : cpp,
  "Python" : python,
  "Java" : java,
  "C#" : csharp,
  "JavaScript" : javascript,
  "HTML" : html,
  "CSS" : css,
  "Lua" : lua,
  "PHP" : php,
}

const FRAMEWORKS = {
    "OpenGL" : opengl,
    "Vulkan" : vulkan,
    "React" : react,
    "Bootstrap" : bootstrap,
    "Tailwind" : tailwind,
    ".NET" : dotnet,
    "node.js" : nodejs,
    "FastAPI" : fastapi,
}

const DEVTOOLS = {
    "VS 2022" : visualstudio,
    "VS Code" : vscode,
    "Git" : git,
    "GitHub" : github,
    "Claude" : claude,
    "Unity" : unity,
    "Docker" : docker,
    "MySQL" : mysql,
    "CMake" : cmake,
}

const OPERATING_SYSTEMS = {
    "Windows" : windows,
    "Unix/Linux" : linux,
    "MacOS" : apple,
    "iOS" : apple,
    "Android" : android,
}

const SECTIONS = {
    "Programming Languages" : PROGRAMMING_LANGUAGES,
    "Frameworks/Libraries" : FRAMEWORKS,
    "Development Tools" : DEVTOOLS,
    "Operating Systems" : OPERATING_SYSTEMS,
}

export const Skills = () => { return (
<div className="p-6"><div className="page-container">
    <h2 className="text-3xl font-bold mb-4">Skills</h2>

    {Object.entries(SECTIONS).map(([sectionKey, sectionValue]) => (
        <div key={sectionKey}><Accordion defaultExpanded slotProps={{ heading: { component: 'h2' } }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
            <h3>{sectionKey}</h3>
            </AccordionSummary>
            
            <AccordionDetails>
                <div className="skills-grid">
                {Object.entries(sectionValue).map(([key, value]) => (
                    <div key={key}><div className="insetcard" style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 0, paddingRight: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <span style={{marginRight: 5}}>
                            <Shake><img src={value} width="30" /></Shake>
                        </span>
                        <span>
                            <h4 style={{textAlign: 'center', paddingTop: 0, paddingBottom: 0, marginBottom: 3, marginTop: 8 }}>{key}</h4>
                        </span>
                    </div></div>
                ))}
                </div>
            </AccordionDetails>
        </Accordion></div>
    ))}
</div></div>
);};