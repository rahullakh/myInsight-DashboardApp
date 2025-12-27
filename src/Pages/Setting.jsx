import  { useState, useRef, useEffect } from "react";
import { FaMoon, FaSun, FaBell } from "react-icons/fa";

const Settings = () => {
  const [user, setUser] = useState({
    name: "Rahul Lakhera",
    email: "rahul@example.com",
    password: "",
  });

  const [preferences, setPreferences] = useState({
    darkMode: false,
    notifications: true,
    autoUpdate: true,
  });

  const [message, setMessage] = useState(""); 

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    if (preferences.darkMode) {
      document.body.classList.add("dark");
      document.body.style.backgroundColor = "#111827";
      document.body.style.color = "white";
    } else {
      document.body.classList.remove("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [preferences.darkMode]);

  useEffect(() => {
    if (preferences.notifications) {
      setMessage(" Notifications Enabled");
    } else {
      setMessage(" Notifications Disabled");
    }

    const timer = setTimeout(() => setMessage(""), 2000);
    return () => clearTimeout(timer);
  }, [preferences.notifications]);

  useEffect(() => {
    if (preferences.autoUpdate) {
      setMessage(" Auto Updates Enabled");
    } else {
      setMessage(" Auto Updates Disabled");
    }

    const timer = setTimeout(() => setMessage(""), 2000);
    return () => clearTimeout(timer);
  }, [preferences.autoUpdate]);

  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const handleSave = () => {
    alert("Settings saved successfully ✅");
  };

  return (
    <div className="py-10 px-4 h-[calc(100vh-80px)] bg-gray-50 dark:bg-gray-900 transition">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6">
        ⚙️ Settings
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6">
          <div className="flex items-center gap-6 mb-4">
            <div
              className="relative w-24 h-24 rounded-full border-4 border-gray-300 bg-white overflow-hidden cursor-pointer group"
              onClick={handleClick}
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  Add Photo
                </div>
              )}

              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Change
              </div>

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Profile
            </h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleUserChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleUserChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleUserChange}
                placeholder="••••••••"
                className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Preferences
          </h3>
          <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {preferences.darkMode ? (
                <FaMoon className="text-gray-300" />
              ) : (
                <FaSun className="text-yellow-500" />
              )}
              <span className="text-gray-800 dark:text-gray-200">
                Dark Mode
              </span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.darkMode}
                onChange={() => togglePreference("darkMode")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-400 dark:bg-gray-700 rounded-full peer peer-checked:bg-blue-600 transition"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaBell className="text-green-500" />
              <span className="text-gray-800 dark:text-gray-200">
                Notifications
              </span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.notifications}
                onChange={() => togglePreference("notifications")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-400 dark:bg-gray-700 rounded-full peer peer-checked:bg-green-500 transition"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-800 dark:text-gray-200">
              Auto Update
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.autoUpdate}
                onChange={() => togglePreference("autoUpdate")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-400 dark:bg-gray-700 rounded-full peer peer-checked:bg-purple-500 transition"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
            </label>
          </div>
        </div>
      </div>

      {message && (
        <div className="fixed bottom-6 bg-black text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
          {message}
        </div>
      )}
      </div>

      <div className="mt-5 flex justify-end">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
