import React, { useEffect, useState } from 'react';
import '../styles/Portfolio.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
// import { fetchGitHubRepos } from '../utils/githubAPI.js';
import fetchGitHubRepos from '../utils/githubAPI.js';

export default function Portfolio() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetchGitHubRepos('TriLea').then((data) => {
            setRepos(data);
        });
    }, []);

    return (
        <div className="projects-container">
            {repos.map((repo) => (
                <div className="project-card" key={repo.id}>
                    <h3 className="project-title">{repo.name}</h3>
                    <p className="project-description">{repo.description}</p>
                    <a href={repo.html_url} target="_blank" className="project-link">
                        View on GitHub
                    </a>
                </div>
            ))}
        </div>
    );
}
