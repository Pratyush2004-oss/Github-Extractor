import { CommitData } from "@/types/github";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface CommitChartProps {
  commits: CommitData[];
}

const CommitChart = ({ commits }: CommitChartProps) => {
  if (commits.length === 0) {
    return <p>No commit data available.</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Daily Commits</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={commits}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" name="Commits" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CommitChart;
