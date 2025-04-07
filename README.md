# GitHub Detail Extractor

GitHub Detail Extractor is a React-based web application built with TypeScript and ShadCN UI components. The application allows users to enter a GitHub username and view the following details:

1. A list of the user's public repositories.
2. A bar chart displaying the number of commits made to these repositories, grouped by date.

This project uses the GitHub API to fetch data and Recharts for visualizing commit activity.

---

## Features

- **Search GitHub Users**: Enter a GitHub username to fetch their public repositories and commit details.
- **Repository List**: Displays repository details such as name, description, stars, forks, and last updated date.
- **Commit Visualization**: A bar chart showing the number of commits grouped by date.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Error Handling**: Displays error messages for invalid usernames or API issues.
- **Loading State**: Shows a spinner while fetching data.

---

## Project Structure

Below is a high-level overview of the project structure:

```plaintext
src/
├── components/
│   ├── shared/
│   │   ├── [UserInput.tsx](http://_vscodecontentref_/2)       # Input field for GitHub username
│   │   ├── [RepoList.tsx](http://_vscodecontentref_/3)        # Displays the list of repositories
│   │   ├── [CommitChart.tsx](http://_vscodecontentref_/4)     # Bar chart for commit data
│   │   ├── [loading.tsx](http://_vscodecontentref_/5)         # Loading spinner component
│   ├── ui/                     # ShadCN UI components (Button, Input, etc.)
├── hooks/
│   ├── [useGitHubAPI.ts](http://_vscodecontentref_/6)         # Custom hook for fetching GitHub data
├── types/
│   ├── [github.ts](http://_vscodecontentref_/7)               # TypeScript interfaces for GitHub data
├── [App.tsx](http://_vscodecontentref_/8)                     # Main application component
├── index.tsx                   # Entry point for the React app
```

How It Works
1. User Input
The user enters a GitHub username in the input field and clicks the "Search" button. This triggers a request to the GitHub API.

2. Fetching Data
The useGitHubAPI custom hook fetches:

A list of public repositories for the given username.
Commit details for each repository, grouped by date.
3. Displaying Data
Repository List: The RepoList component displays the repositories in a card layout.
Commit Chart: The CommitChart component visualizes the commit data using a bar chart.
4. Error Handling
If the username is invalid or the API request fails, an error message is displayed.

Installation and Setup
Follow these steps to run the project locally:

Prerequisites
Node.js (v16 or later)
npm or yarn
Steps
Clone the repository:

Install dependencies:

Start the development server:

Open the app in your browser at http://localhost:5173.

Usage
Enter a GitHub username in the input field.
Click the "Search" button.
View the list of public repositories and the commit activity chart.
Technologies Used
React: Frontend framework for building the user interface.
TypeScript: For type-safe development.
ShadCN: UI components for a modern and consistent design.
Recharts: For visualizing commit data in a bar chart.
Axios: For making API requests to GitHub.
Tailwind CSS: For styling the application.

```plaintext
Diagram
Below is a structured diagram of the application's workflow:

API Endpoints Used
Fetch Repositories:
GET https://api.github.com/users/{username}/repos

Fetch Commits:
GET https://api.github.com/repos/{username}/{repo}/commits

Future Enhancements
Pagination: Support for fetching additional repositories and commits.
Sorting and Filtering: Allow users to sort repositories by stars, forks, or last updated date.
Dark Mode: Add a dark mode toggle for better accessibility.
Deployment: Deploy the app on platforms like Vercel or Netlify.
Authentication: Authentication can be done to increase the request limit from github.

```

