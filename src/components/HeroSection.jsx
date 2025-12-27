import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
  <section className="h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="max-w-3xl text-center space-y-6">
      
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Manage Everything With One Smart Dashboard
        </h1>

      
        <p className="text-gray-600 text-lg">
          Organize files, analyze data and manage orders easily with a fast,
          secure and modern dashboard.
        </p>

       
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            Get Started
          </button>

          <a 
           onClick={()=> navigate("/features")}
            href="#features"
            className="px-6 py-3 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-200 transition"
          >
            View Features
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
