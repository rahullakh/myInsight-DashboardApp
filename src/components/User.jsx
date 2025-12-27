import  { useState } from "react";
import {BiSearch } from "react-icons/bi";
const User = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Kavya Singh",
      email: "kavya@example.com",
      role: "Admin",
      status: "Active",
      joined: "2024-05-15",
    },
    {
      id: 2,
      name: "Rahul Lakhera",
      email: "rahul@example.com",
      role: "Manager",
      status: "Inactive",
      joined: "2024-06-10",
    },
    {
      id: 3,
      name: "Aman Sharma",
      email: "aman@example.com",
      role: "User",
      status: "Active",
      joined: "2025-01-21",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "User",
    status: "Active",
  });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) {
      alert("Please fill all required fields!");
      return;
    }

    const newUserData = {
      ...newUser,
      id: users.length + 1, 
      joined: new Date().toISOString().split("T")[0],
    };

    setUsers([...users, newUserData]);

    setNewUser({ name: "", email: "", role: "User", status: "Active" });

    setIsAdding(false);
  };

  
   const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
   );

  const handleSearch = ()=>{
    setUsers(filteredUsers);    
  }

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id)); 
  };

  const handleEdit = (user) => {
    setCurrentUser({ ...user });
    setIsEditing(true);
  };

  const handleSave = () => {  
    setUsers(users.map((u) => (u.id === currentUser.id ? currentUser : u)));
    setIsEditing(false);
  };

  return (
      <div className="flex-grow p-4 sm:p-6 md:p-8 transition-all duration-300 ">
        <div className="dark:bg-gray-800 dark:shadow-lg rounded-md p-2">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-3">
          <h2 className="text-2xl font-semibold">👥 Users List</h2>

          <button
            onClick={() => setIsAdding(true)}
            className="bg-green-500 font-semibold text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            + Add User
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-3">
          <div className="flex items-center w-full sm:w-1/2 gap-2">
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow border font-semibold border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            />
            <button className="bg-blue-500 font-semibold text-white px-4 py-2 text-sm sm:text-base rounded-lg hover:bg-blue-600 whitespace-nowrap">
              <BiSearch onClick={handleSearch} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <table className="min-w-full border border-gray-200 text-sm sm:text-base">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-2 px-3 sm:px-4 text-left">Name</th>
                <th className="py-2 px-3 sm:px-4 text-left">Email</th>
                <th className="py-2 px-3 sm:px-4 text-left">Role</th>
                <th className="py-2 px-3 sm:px-4 text-left">Status</th>
                <th className="py-2 px-3 sm:px-4 text-left">Joined</th>
                <th className="py-2 px-3 sm:px-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50 transition duration-150"
                >
                  <td className="py-2 font-semibold px-3 sm:px-4">{user.name}</td>
                  <td className="py-2 font-semibold px-3 sm:px-4 break-words">{user.email}</td>
                  <td className="py-2 font-semibold px-3 sm:px-4">{user.role}</td>
                  <td
                    className={`py-2 px-3 sm:px-4 font-medium ${
                      user.status === "Active" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {user.status}
                  </td>
                  <td className="py-2 font-semibold px-3 sm:px-4">{user.joined}</td>
                  <td className="py-2 font-semibold px-3 sm:px-4 text-center space-x-2 space-y-1 md:space-y-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-blue-500 text-white  px-2 sm:px-3 py-1 rounded hover:bg-blue-600 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 text-white  px-2 sm:px-3 py-1 rounded hover:bg-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center text-gray-500 py-4 italic">
                    No users found 😔
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {(isEditing || isAdding) && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg p-5 w-full max-w-sm sm:max-w-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
                {isEditing ? "Edit User" : "Add New User"}
              </h3>

              <div className="space-y-3">
                <input
                  type="text"
                  value={isEditing ? currentUser.name : newUser.name}
                  onChange={(e) =>
                    isEditing
                      ? setCurrentUser({ ...currentUser, name: e.target.value })
                      : setNewUser({ ...newUser, name: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  placeholder="Name"
                />
                <input
                  type="email"
                  value={isEditing ? currentUser.email : newUser.email}
                  onChange={(e) =>
                    isEditing
                      ? setCurrentUser({ ...currentUser, email: e.target.value })
                      : setNewUser({ ...newUser, email: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  placeholder="Email"
                />
                <select
                  value={isEditing ? currentUser.role : newUser.role}
                  onChange={(e) =>
                    isEditing
                      ? setCurrentUser({ ...currentUser, role: e.target.value })
                      : setNewUser({ ...newUser, role: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option>User</option>
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Devloper</option>
                  <option>Coder</option>

                </select>
                <select
                  value={isEditing ? currentUser.status : newUser.status}
                  onChange={(e) =>
                    isEditing
                      ? setCurrentUser({ ...currentUser, status: e.target.value })
                      : setNewUser({ ...newUser, status: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 mt-5">
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setIsAdding(false);
                  }}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-800 text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={isEditing ? handleSave : handleAddUser}
                  className={`px-4 py-2 text-white rounded text-sm ${
                    isEditing
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  {isEditing ? "Save" : "Add"}
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
  );
};

export default User;
