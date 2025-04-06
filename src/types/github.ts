export interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
}

export interface GitHubCommit {
    sha: string;
    commit: {
        message: string;
        author: {
            date: string;
        };
    };
    html_url: string;
}

export interface CommitData {
    date: string;
    count: number
}