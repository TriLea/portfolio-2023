import '../assets/styles/Portfolio.css';
import { Link, useLocation } from "react-router-dom";


export default function Portfolio() {

    return (
        <div class="project-card">
            {/* <img src="repo-image.jpg" alt="Repository Image" class="project-image"> */}
            <h3 class="project-title">Repository Name</h3>
            <p class="project-description">Brief description about the repository.</p>
            <a href="github-repo-link" target="_blank" class="project-link">View on GitHub</a>
        </div>
    );
}

//link to live deployment through example photo
/* <a href="URL_OF_YOUR_LIVE_DEPLOYMENT" target="_blank">
    <img src="path_to_your_screenshot.jpg" alt="Description of your project" class="project-screenshot">
</a> */


// Replace with your GitHub username
// let username = 'YOUR_GITHUB_USERNAME';
//
// fetch(`https://api.github.com/users/${username}/repos`)
//     .then(response => response.json())
//     .then(repos => {
//         let output = '';
//         repos.forEach(repo => {
//             output += `
//             <div class="project-card">
//                 <img src="${repo.owner.avatar_url}" alt="Repository Image" class="project-image">
//                 <h3 class="project-title">${repo.name}</h3>
//                 <p class="project-description">${repo.description || 'No description provided.'}</p>
//                 <a href="${repo.html_url}" target="_blank" class="project-link">View on GitHub</a>
//             </div>
//             `;
//         });
//         document.getElementById('projects-container').innerHTML = output;
//     });
