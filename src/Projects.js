import React, { useState, useEffect } from 'react';
import GitHubButton from 'react-github-btn';
import { Button } from './Button.js';
import github from "./images/github.png"

import cataclysm from "./images/Cataclysm.png"
import shadersandbox from "./images/ShaderSandbox.png"
import pcr from "./images/PointCloudRenderer.png"
import forge from "./images/forge.png"
import uno from "./images/TermProject.png"

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const REPO_IMAGES = {
  "ShaderSandbox" : shadersandbox,
  "Cataclysm" : cataclysm,
  "PointCloudRenderer" : pcr,
  "Forge" : forge,
  "TermProject" : uno,
}

export const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/jackpsmith-git/repos?sort=updated&per_page=5"
        );
        const data = await res.json();

        if (!Array.isArray(data)) {
          console.error("GitHub API error:", data);
          return;
        }

        const enriched = await Promise.all(
          data.map(async (repo) => {
            const image = REPO_IMAGES[repo.name];
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
              image: image,
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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <Accordion key={repo.name}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              {repo.image ? (
                 <img
                  src={repo.image}
                  alt={repo.name}
                  style={{
                    width: 100,
                    objectFit: "cover",
                    borderRadius: 8,
                    marginRight: 12
                  }}
                />
              ) : (
                <div style={{width: 100, height: 50}} />
              )}
              
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
                  <GitHubButton href={`${repo.url}`} data-color-scheme="no-preference: light; light: light; dark: dark;" data-show-count="false" data-size="large" aria-label="Source Code">Source Code</GitHubButton>
                </span>
                <span>
                  <div className="insetcard" style={{ margin: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 4, paddingLeft: 8, paddingRight: 8, borderRadius: 4, boxShadow: 'inset 0 2px 3px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(247, 247, 247)'}}>
                    <span style={{paddingRight: 10, alignItems: 'center'}}>
                      <strong style={{ display: 'inline-block', width: 16, textAlign: 'center' }}>★</strong> {repo.stars}
                    </span>
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
  </div>
  </div>
  </div>
  );
};