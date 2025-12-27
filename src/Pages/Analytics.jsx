import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import Card from "./Card";
const Analytics = () => {
  const [salesData, setSalesData] = useState([
    { month: "Jan", sales: 4000, users: 2400 },
    { month: "Feb", sales: 3000, users: 2210 },
    { month: "Mar", sales: 5000, users: 2290 },
    { month: "Apr", sales: 4780, users: 2000 },
    { month: "May", sales: 5890, users: 2181 },
    { month: "Jun", sales: 4390, users: 2500 },
  ]);

  const [stats, setStats] = useState({
    totalUsers: 1240,
    activeUsers: 940,
    newUsers: 120,
    revenue: 56000,
  });

  return (
    <div className="p-6 h-[calc(100vh-80px)] text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-6">📈 Analytics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card
          value={stats.totalUsers}
          title="Total Users"
          bg="bg-blue-600"
        ></Card>
        <Card
          value={stats.activeUsers}
          title="Active Users"
          bg="bg-green-600"
        ></Card>
        <Card
          value={stats.newUsers}
          title="New Users"
          bg="bg-purple-600"
        ></Card>
        <Card value={stats.revenue} title="Revenue" bg="bg-yellow-600"></Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-4">
          <h3 className="text-xl font-semibold mb-4">Monthly Sales</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={salesData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#33cd32" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">User Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#32cd32"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
