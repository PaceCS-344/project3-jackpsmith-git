import { useState, useEffect } from "react";

import headshot from "./images/headshot.jpeg"
import github from "./images/github.png"

export const useGitHubUser = (username) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const base = `https://api.github.com/users/${username}`;

        const [userRes, followersRes, orgsRes, starredRes] =
          await Promise.all([
            fetch(base),
            fetch(`${base}/followers?per_page=100`),
            fetch(`${base}/orgs`),
            fetch(`${base}/starred?per_page=100`)
          ]);

        const user = await userRes.json();
        const followers = await followersRes.json();
        const orgs = await orgsRes.json();
        const starred = await starredRes.json();

        if (!user || user.message === "Not Found") {
          console.error("GitHub API error:", user);
          return;
        }

        const enriched = {
          username: user.login,
          name: user.name,
          bio: user.bio,
          avatar: user.avatar_url,
          profileUrl: user.html_url,

          followersCount: user.followers,
          followers: Array.isArray(followers)
            ? followers.map((f) => f.login)
            : [],

          organizations: Array.isArray(orgs)
            ? orgs.map((o) => o.login)
            : [],

          starredReposCount: Array.isArray(starred)
            ? starred.length
            : 0,

          starredRepos: Array.isArray(starred)
            ? starred.map((r) => ({
                name: r.name,
                url: r.html_url,
                stars: r.stargazers_count,
              }))
            : [],
        };

        setUserInfo(enriched);
      } catch (err) {
        console.error("GitHub fetch failed:", err);
      }
    };

    if (username) fetchUser();
  }, [username]);

  return userInfo;
};

export const About = () => {
  const user = useGitHubUser("jackpsmith-git");

  return (
  <div className="p-6"><div className="page-container">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>

    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img style={{ margin: 20 }} src={headshot} alt="Headshot" width={200} />
    </div>

    {user && (
      <div>
          <p style={{ textAlign: "center", paddingBottom: 0, marginBottom: 0, marginTop: 5 }}>{user.bio}</p>
      </div>
    )}

    <p style={{ textAlign: "center", marginBottom: 40 }}>Click on the 'Projects' tab in the upper right to browse my current and past projects, or navigate to the 'Skills' page to learn more about me.</p>

    <div className="card">
      <h3 style={{ paddingTop: 15 }}>Education</h3>
      <p style={{ paddingLeft: 15, paddingRight: 15, marginBottom: 0 }}><strong>Pace University, Seidenberg School of Computer Science and Information Systems</strong> | Pleasantville, NY</p>
      <p style={{ paddingLeft: 15, paddingRight: 15, marginTop: 0, marginBottom: 0 }}>Bachelor of Science (BS) in Computer Science</p>
      <p style={{ paddingLeft: 15, paddingRight: 15, marginTop: 0, marginBottom: 0 }}><strong>GPA</strong>: 3.89 | <strong>Honors:</strong> Dean's List (First Honors) x2, Outstanding Academic Achievement Award, Tau Sigma National Honor Society</p>
      <p style={{ paddingLeft: 15, paddingRight: 15, marginBottom: 0 }}><strong>SUNY Westchester Community College, School of Business and Professional Careers</strong> | Valhalla, NY</p>
      <p style={{ paddingLeft: 15, paddingRight: 15, marginTop: 0, marginBottom: 0 }}>Associate of Applied Science (AAS) in Interactive Technologies, Concentration in Computer Animation and Game Design</p>
      <p style={{ paddingLeft: 15, paddingRight: 15, marginTop: 0, marginBottom: 0 }}><strong>GPA</strong>: 3.44</p>
    </div>

    {user && (
      <div className="insetcard" style={{marginBottom: 40, marginTop: 40}}>
        <a href="https://www.github.com/jackpsmith-git" target="_blank"><div className="shake"><img src={github} style={{display: 'block', margin: '0 auto', width: '10%', height: '10%'}}></img></div></a>
        <p style={{ textAlign: "center", paddingBottom: 0, marginBottom: 0 }}>
          {user.username}
        </p>   
        <p style={{ textAlign: "center", paddingBottom: 0, marginBottom: 0, marginTop: 5 }}>
          Followers: {user.followersCount} | ★ {user.starredReposCount}
        </p>
      </div>
    )}
  </div></div>
  );
};