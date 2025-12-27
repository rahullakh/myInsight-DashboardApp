import  { useState } from "react";
import { FaSearch, FaTrashAlt, FaBox, FaTruck, FaClock, FaTimes } from "react-icons/fa";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const [orders, setOrders] = useState([
    { id: 1, customer: "Rahul Lakhera", total: 2500, status: "Delivered", date: "2025-10-01" },
    { id: 2, customer: "Kavya Singh", total: 1800, status: "Pending", date: "2025-10-05" },
    { id: 3, customer: "Rohit Sharma", total: 3200, status: "Cancelled", date: "2025-09-28" },
    { id: 4, customer: "Aman Verma", total: 1500, status: "Delivered", date: "2025-09-30" },
    { id: 5, customer: "Nisha Gupta", total: 2200, status: "Pending", date: "2025-10-02" },
  ]);

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "All" || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

 

  const totalOrders = orders.length;
  const delivered = orders.filter((o) => o.status === "Delivered").length;
  const pending = orders.filter((o) => o.status === "Pending").length;
  const cancelled = orders.filter((o) => o.status === "Cancelled").length;
  
 const handleDelete = (id) => {
    const updated = orders.filter((order) => order.id !== id);
    setOrders(updated);
  };
  return (
    <div className="p-6 h-[calc(100vh-80px)] bg-gray-50 dark:bg-gray-900 transition">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        🛍️ Orders 
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 flex items-center gap-4">
          <FaBox className="text-blue-500 text-3xl" />
          <div>
            <p className="text-gray-500 text-sm font-semibold">Total Orders</p>
            <h3 className="text-xl font-bold">{totalOrders}</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 flex items-center gap-4">
          <FaTruck className="text-green-500 text-3xl" />
          <div>
            <p className="text-gray-500 text-sm font-semibold">Delivered</p>
            <h3 className="text-xl font-bold text-green-600">{delivered}</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 flex items-center gap-4">
          <FaClock className="text-yellow-500 text-3xl" />
          <div>
            <p className="text-gray-500 text-sm font-semibold">Pending</p>
            <h3 className="text-xl font-bold text-yellow-500">{pending}</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 flex items-center gap-4">
          <FaTimes className="text-red-500 text-3xl" />
          <div>
            <p className="text-gray-500 text-sm font-semibold">Cancelled</p>
            <h3 className="text-xl font-bold text-red-500">{cancelled}</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6">
        <div className="flex items-center w-full sm:w-1/2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2">
          <FaSearch className="text-gray-400 mr-2 font-semibold" />
          <input
            type="text"
            placeholder="Search customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full font-semibold bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
          />
        </div>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Orders</option>
          <option value="Pending">Pending</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow">
        <table className="min-w-full text-sm sm:text-base">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <tr>
              <th className="py-3 px-4 text-left">Customer</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Total</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="py-3 px-4">{order.customer}</td>
                  <td className="py-3 px-4">{order.date}</td>
                  <td className="py-3 px-4">₹{order.total}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleDelete(order.id)}
                      className="text-red-500 hover:text-red-700 transition"
                      title="Delete Order"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center text-gray-500 py-6 italic"
                >
                  No matching orders found 😔
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
