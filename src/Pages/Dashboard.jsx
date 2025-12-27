
import { FaUsers, FaChartLine, FaEnvelope, FaDollarSign } from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    { id: 1, label: "Total Users", value: "1,245", icon: <FaUsers className="text-blue-600" />, change: "+8%" },
    { id: 2, label: "Total Sales", value: "$52,340", icon: <FaDollarSign className="text-green-600" />, change: "+12%" },
    { id: 3, label: "New Messages", value: "324", icon: <FaEnvelope className="text-purple-600" />, change: "-2%" },
    { id: 4, label: "Growth Rate", value: "24%", icon: <FaChartLine className="text-orange-600" />, change: "+5%" },
  ];

  const recentActivity = [
    { id: 1, user: "Rahul Lakhera", action: "added a new user", time: "2 mins ago" },
    { id: 2, user: "Kavya Singh", action: "updated profile info", time: "10 mins ago" },
    { id: 3, user: "Aman Sharma", action: "sent a message", time: "1 hour ago" },
    { id: 4, user: "Priya Mehta", action: "deactivated an account", time: "3 hours ago" },
  ];

  return (
    <div className="p-6 space-y-8 bg-gray-50 dark:bg-gray-900 h-[calc(100vh-80px)]">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
        Dashboard 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white dark:bg-gray-800 shadow-sm cursor-pointer rounded-xl p-5 flex items-center justify-between hover:shadow-lg transition-all duration-100"
          >
            <div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {stat.value}
              </h2>
              <p
                className={`text-sm mt-1 ${
                  stat.change.startsWith("+")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {stat.change} from last week
              </p>
            </div>
            <div className="text-3xl">{stat.icon}</div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Recent Activity
        </h3>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentActivity.map((item) => (
            <li key={item.id} className="py-3 flex justify-between">
              <div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  {item.user}
                </p>
                <p className="text-gray-500 text-sm">{item.action}</p>
              </div>
              <span className="text-gray-400 text-sm">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
