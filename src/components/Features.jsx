import { FaChartLine } from "react-icons/fa"
import Layout from "./Layout"
import { HiOutlineClipboardList, HiOutlineFolder } from "react-icons/hi"
import { useNavigate } from "react-router-dom";


const Features = () => {
 const navigate = useNavigate();

const userFeatures = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    navigate("/Dash");
  } else {
    navigate("/signup");
  }
};

  return (
    <Layout>
          <section
      id="features"
      className="bg-white py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Powerful Dashboard Features
        </h2>
        <p className="text-gray-600 mb-12">
          Everything you need to manage your business in one place.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div onClick={()=> userFeatures()} className="flex flex-col items-center justify-center space-y-4 p-6 cursor-pointer border rounded-xl shadow-sm hover:shadow-md transition">
            <HiOutlineFolder className="text-6xl text-blue-400 mb-2" />
            <h3 className="text-xl font-semibold mb-2">File Manager</h3>
            <p className="text-gray-600">
              Upload, organize and manage your files securely.
            </p>
          </div>

          <div onClick={()=> userFeatures()} className="flex flex-col items-center justify-center space-y-4 p-6 cursor-pointer border rounded-xl shadow-sm hover:shadow-md transition">
            <FaChartLine className="text-6xl text-green-400 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
            <p className="text-gray-600">
              Visualize your data and track performance easily.
            </p>
          </div>

          <div onClick={()=> userFeatures()} className="flex flex-col items-center justify-center space-y-4 p-6 cursor-pointer border rounded-xl shadow-sm hover:shadow-md transition">
            <HiOutlineClipboardList className="text-6xl text-orange-400 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Order Management</h3>
            <p className="text-gray-600">
              Manage orders and customers efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default Features
