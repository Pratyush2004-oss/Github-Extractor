import { GitHubRepo } from "@/types/github";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { GitFork, Star } from "lucide-react";

interface RepolistProps {
  repos: GitHubRepo[];
}
const RepoList = ({ repos }: RepolistProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">
        Public Repositories ({repos.length})
      </h2>
      {repos.length === 0 ? (
        <p>No repositories found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <Card key={repo.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {repo.name}
                  </a>
                </CardTitle>
                <CardDescription>
                  {repo.description || "No description provided"}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex gap-4 text-sm">
                <div className="flex items-center">
                  <Star className="size-4 mr-1" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center">
                  <GitFork className="size-4 mr-1" />
                  <span>{repo.forks_count}</span>
                </div>
                <div className="text-muted-foreground">
                  Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default RepoList;
