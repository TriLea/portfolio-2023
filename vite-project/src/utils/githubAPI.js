import axios from 'axios';

export default async function fetchGitHubRepos(username) {
    try {
        const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
        const repos = repoResponse.data;

        // Fetch and parse README.md for each repository
        const repoDetails = await Promise.all(repos.map(async (repo) => {
            try {
                const readmeResponse = await axios.get(`https://raw.githubusercontent.com/${username}/${repo.name}/master/README.md`);
                const readmeContent = readmeResponse.data;

                // Extract the first image URL from the README.md content
                const imageUrl = readmeContent.match(/\!\[.*\]\((.*)\)/)?.[1];

                return { ...repo, imageUrl };
            } catch (error) {
                console.error(`Error fetching README for ${repo.name}:`, error);
                return { ...repo, imageUrl: null };
            }
        }));

        return repoDetails;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}
