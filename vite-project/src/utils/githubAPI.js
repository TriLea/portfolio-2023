import axios from 'axios';

export default async function fetchGitHubRepos(username) {
    try {
        const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
        const repos = repoResponse.data;

        // Manually define a mapping between repository names and image URLs
        const repoImages = {
            'repository-name-1': 'url-to-image-1',
            'repository-name-2': 'url-to-image-2',
            // Add more repository-image mappings as needed
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
