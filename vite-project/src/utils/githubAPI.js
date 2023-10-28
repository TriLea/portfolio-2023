import axios from 'axios';

export default async function fetchGitHubRepos(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}

