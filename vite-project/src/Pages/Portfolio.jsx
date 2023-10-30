import React, { useEffect, useState } from 'react';
import '../styles/Portfolio.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
// import { fetchGitHubRepos } from '../utils/githubAPI.js';
import fetchGitHubRepos from '../utils/githubAPI.js';

export default function Portfolio() {
    const [repos, setRepos] = useState([]);

    //aplhabetical order
    // useEffect(() => {
    //     fetchGitHubRepos('TriLea').then((data) => {
    //         setRepos(data);
    //     });
    // }, []);

    //most recently edited
    useEffect(() => {
        fetchGitHubRepos('TriLea').then((data) => {
            const sortedRepos = data.sort((a, b) => {
                return new Date(b.pushed_at) - new Date(a.pushed_at);
            });
            setRepos(sortedRepos);
        });
    }, []);

    //preferred order
    // const preferredOrder = ['RepoName1', 'RepoName2', 'RepoName3'];

    // useEffect(() => {
    //     fetchGitHubRepos('TriLea').then((data) => {
    //         const sortedRepos = data.sort((a, b) => {
    //             return preferredOrder.indexOf(a.name) - preferredOrder.indexOf(b.name);
    //         });
    //         setRepos(sortedRepos);
    //     });
    // }, []);

    //image returning repo card template
    <div className="projects-container">
        {repos.map((repo) => (
            <div className="project-card" key={repo.id}>
                {repo.imageUrl && <img src={repo.imageUrl} alt={repo.name} className="project-image" />}
                <h3 className="project-title">{repo.name}</h3>
                <p className="project-description">{repo.description}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
                    View on GitHub
                </a>
            </div>
        ))}
    </div>

    //non photo returning repo card template
    // return (
    //     <div className="projects-container">
    //         {repos.map((repo) => (
    //             <div className="project-card" key={repo.id}>
    //                 <h3 className="project-title">{repo.name}</h3>
    //                 <p className="project-description">{repo.description}</p>
    //                 <a href={repo.html_url} target="_blank" className="project-link">
    //                     View on GitHub
    //                 </a>
    //             </div>
    //         ))}
    //     </div>
    // );
}
