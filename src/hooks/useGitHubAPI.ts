import { useState, useEffect } from 'react';
import axios from 'axios';
import { GitHubRepo, GitHubCommit, CommitData } from '../types/github';

const useGitHubAPI = (username: string) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [commits, setCommits] = useState<CommitData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setRepos([]);
      setCommits([]);

      try {
        // 1. First fetch repositories
        const reposResponse = await axios.get<GitHubRepo[]>(
          `https://api.github.com/users/${username}/repos`
        );
        setRepos(reposResponse.data);

        // 2. Then fetch commits for each repository
        const commitPromises = reposResponse.data.map(repo =>
          axios.get<GitHubCommit[]>(`https://api.github.com/repos/${username}/${repo.name}/commits`, {
            params: {
              per_page: 100, // Get more commits per repo
            }
          }).catch(err => {
            console.error(`Failed to fetch commits for ${repo.name}:`, err);
            return { data: [] }; // Return empty array if fails
          })
        );

        const allCommitsResponses = await Promise.all(commitPromises);
        const allCommits = allCommitsResponses.flatMap(response => response.data);

        // 3. Process commits data
        const commitsByDate: Record<string, number> = {};
        allCommits.forEach(commit => {
          if (!commit?.commit?.author?.date) return;
          const date = new Date(commit.commit.author.date).toISOString().split('T')[0];
          commitsByDate[date] = (commitsByDate[date] || 0) + 1;
        });

        const sortedCommits = Object.entries(commitsByDate)
          .map(([date, count]) => ({ date, count }))
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        setCommits(sortedCommits);
      } catch (err) {
        setError('Failed to fetch GitHub data. Please check the username and try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { repos, commits, loading, error };
};

export default useGitHubAPI;