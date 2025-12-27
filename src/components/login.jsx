import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const login = () => {
   const navigate = useNavigate();
   const[formData, setFormData] = useState({
    Email: "",
    Password:""
  });

  const handleInput = (e)=>{
    const {name, value} = e.target;
    setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
  }

  const handleLogin = (e)=>{
     e.preventDefault();
     const {Email, Password} = formData;
     if(!Email || !Password){
      alert("ALl Fields are required !");
      return;
     }

     let users = JSON.parse(localStorage.getItem("users")) || [];
     console.log(users);

     const matchUser = users.find(user => user.Email === Email.toLowerCase() && user.Password === Password);

     if(!matchUser){
      alert("Invalid Email and Password");
      navigate("/signup");
      return;
     }

     localStorage.setItem("currentUser",JSON.stringify(matchUser));
      alert("Login successful");
      navigate("/dash");

    setFormData({
    Email: "",
    Password: ""
  });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-gray-900 border border-white/10 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl text-center mb-6 font-semibold text-white">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
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

          <button
            type="submit"
            className="w-full py-2 rounded-lg font-medium
               bg-green-500 text-black
               hover:bg-green-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-100 text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default login;
