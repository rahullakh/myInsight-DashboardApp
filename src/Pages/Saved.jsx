import { useState } from "react";
import { FaTrash, FaBookmark } from "react-icons/fa";

const Saved = () => {
  const [savedItems, setSavedItems] = useState([
    { id: 1, title: "React Dashboard Tutorial", type: "Article", category: "Frontend" },
    { id: 2, title: "Design System Guidelines", type: "Document", category: "UI/UX" },
    { id: 3, title: "Marketing Strategy.pdf", type: "File", category: "Marketing" },
    { id: 4, title: "UX Research Notes", type: "Document", category: "UX" },
    { id: 5, title: "Node.js API Example", type: "Article", category: "Backend" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const handleDelete = (id) => {
    const updated = savedItems.filter((item) => item.id !== id);
    setSavedItems(updated);
  };

  const filteredItems = savedItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "All" || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set(savedItems.map((item) => item.category))];

  return (
    <div className="p-6 h-[calc(100vh-80px)] bg-gray-50 dark:bg-gray-900 transition">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6">
        💾 Saved Items
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
        <input
          type="text"
          placeholder="Search saved items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 transition"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 transition"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 shadow rounded-xl p-5 flex flex-col justify-between hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaBookmark className="text-blue-500 text-2xl" />
                <div className="truncate">
                  <h3 className="font-semibold text-gray-900 dark:text-white truncate">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{item.type}</p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-3">
                <span className="text-xs px-3 py-2 rounded-xl font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">{item.category}</span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex items-center rounded-lg px-4 py-2 font-semibold bg-[#32cd32]  gap-1 text-white hover:bg-[#10b810] transition text-sm"
                  title="Delete"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 italic py-10">
            No saved items found 😔
          </p>
        )}
      </div>
    </div>
  );
};

export default Saved;
