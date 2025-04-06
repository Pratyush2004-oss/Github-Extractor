import UserInput from "./components/shared/UserInput";
import { useState } from "react";
import useGitHubAPI from "./hooks/useGitHubAPI";
import { Alert, AlertDescription } from "./components/ui/alert";
import LoadingSpinner from "./components/shared/loading";
import CommitChart from "./components/shared/CommitChart";
import RepoList from "./components/shared/RepoList";

function App() {
  const [username, setusername] = useState<string>("");
  const [submittedUsername, setsubmittedUsername] = useState("");
  const { commits, error, loading, repos } = useGitHubAPI(submittedUsername);
  const handleSubmit = () => {
    if (username.trim()) {
      setsubmittedUsername(username.trim());
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Github Activity Metrices</h1>
      <div className="mb-8">
        <UserInput
          value={username}
          onChange={setusername}
          onSubmit={handleSubmit}
          disabled={loading}
        />
      </div>
      {error && (
        <Alert variant={"destructive"} className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {submittedUsername && (
            <div className="space-y-8">
              <CommitChart commits={commits} />
              <RepoList repos={repos} />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
