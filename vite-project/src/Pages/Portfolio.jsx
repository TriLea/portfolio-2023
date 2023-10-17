import '../styles/Portfolio.css';
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
