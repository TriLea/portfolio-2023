import axios from 'axios';
import image1 from '../assets/T_logo.png';

export default async function fetchGitHubRepos(username) {
    try {
        const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
        const repos = repoResponse.data;

        // Manually define a mapping between repository names and image URLs
        const repoImages = {
            'aDailyPlanner': image1,
            'repository-name-2': 'url-to-image-2',
        };

        // Add imageUrl property to each repository based on the mapping
        const repoDetails = repos.map(repo => {
            return { ...repo, imageUrl: repoImages[repo.name] || null };
        });

        return repoDetails;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}
