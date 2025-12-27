import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    UserName: "",
    Email: "",
    Password: "",
    confirmPass: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const { UserName, Email, Password, confirmPass } = formData;
    if (!UserName || !Email || !Password || !confirmPass) {
      alert("ALl Fields are required !");
      return;
    }

    if (Password !== confirmPass) {
      alert("Password Do Not Match!");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((user) => user.email === Email.toLowerCase());
    if (userExists) {
      alert("Already Email Exists...");
      return;
    }
    users.push({
      UserName: UserName.toLowerCase(),
      Email: Email.toLowerCase(),
      Password: Password,
      createdAt: Date.now(),
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup Successfully!");

    navigate("/login");

    setFormData({
      UserName: "",
      Email: "",
      Password: "",
      confirmPass: "",
    });
  };

  return (
    <section className="py-2 px-4 min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md text-white bg-gray-800 shadow-lg rounded-2xl border border-white/10 py-2 px-8">
        <h2 className="text-2xl text-center font-semibold mb-6">Signup</h2>
        <form onSubmit={handleSumbit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="N"
              name="UserName"
              value={formData.UserName}
              onChange={handleInput}
              required
              placeholder=" "
              className="peer w-full px-4 pt-5 pb-2
      rounded-lg border border-white/10 bg-black text-white
      focus:outline-none focus:border-green-500"
            />

            <label
              htmlFor="N"
              className="absolute left-4 top-3 rounded text-gray-400 text-sm
      transition-all duration-300
      peer-focus:-top-3 peer-focus:text-green-400 peer-focus:text-xs
      peer-valid:-top-3
      peer-valid:text-xs
      peer-valid:text-green-400
      bg-black px-2 py-1"
            >
              Full Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="E"
              name="Email"
              value={formData.Email}
              onChange={handleInput}
              required
              placeholder=" "
              className="peer w-full px-4 pt-5 pb-2
      rounded-lg border border-white/10 bg-black text-white
      focus:outline-none focus:border-green-500"
            />

            <label
              htmlFor="E"
              className="absolute left-4 top-3 rounded text-gray-400 text-sm
      transition-all duration-300
      peer-focus:-top-3 peer-focus:text-green-400 peer-focus:text-xs
      peer-valid:-top-3
      peer-valid:text-xs
      peer-valid:text-green-400
      bg-black px-2 py-1"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="P"
              name="Password"
              value={formData.Password}
              onChange={handleInput}
              required
              placeholder=" "
              className="peer w-full px-4 pt-5 pb-2
      rounded-lg border border-white/10 bg-black text-white
      focus:outline-none focus:border-green-500"
            />

            <label
              htmlFor="P"
              className="absolute left-4 top-3 rounded text-gray-400 text-sm
      transition-all duration-300
      peer-focus:-top-3 peer-focus:text-green-400 peer-focus:text-xs
      peer-valid:-top-3
      peer-valid:text-xs
      peer-valid:text-green-400
      bg-black px-2 py-1"
            >
              Password
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="CP"
              name="confirmPass"
              value={formData.confirmPass}
              onChange={handleInput}
              required
              placeholder=" "
              className="peer w-full px-4 pt-5 pb-2
      rounded-lg border border-white/10 bg-black text-white
      focus:outline-none focus:border-green-500"
            />

            <label
              htmlFor="CP"
              className="absolute left-4 top-3 rounded text-gray-400 text-sm
      transition-all duration-300
      peer-focus:-top-3 peer-focus:text-green-400 peer-focus:text-xs
      peer-valid:-top-3
      peer-valid:text-xs
      peer-valid:text-green-400
      bg-black px-2 py-1"
            >
              Confirm Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg font-medium
               bg-green-500 text-white
               hover:bg-green-600 transition"
          >
            Create Account
          </button>
        </form>
        <div className="w-full py-2 text-center ">
          Already have an account?
          <Link to={"/login"} className="text-green-400 ml-2 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default signup;
