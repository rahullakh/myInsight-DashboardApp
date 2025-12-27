import  { useState } from "react";
import { FaFileAlt, FaFolder, FaTrash, FaUpload } from "react-icons/fa";

const FileManager = () => {
  const [files, setFiles] = useState([
    { id: 1, name: "Project Report.pdf", type: "file", size: "2.4 MB" },
    { id: 2, name: "Invoices", type: "folder" },
    { id: 3, name: "Team Photo.png", type: "file", size: "1.2 MB" },
  ]);


  const handleUpload = (e) => {

    const file = e.target.files[0]; 
    
    console.log(file);
    
    if (!file) return; 
    
    const newFile = {
      id: files.length + 1,
      name: file.name,
      type: "file",
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
    };

    setFiles([...files, newFile]);
  };

  const handleDelete = (id) => {
    const updatedFiles = files.filter((file) => file.id !== id); 
    setFiles(updatedFiles);
  };

  return (
    <div className="p-6 h-[calc(100vh-80px)] bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          File Manager
        </h2>

        <label className="flex items-center gap-2 px-4 py-2 bg-[#33cd33] text-white rounded-lg cursor-pointer hover:bg-[#0acc0a]transition">
          <FaUpload /> Upload File
          <input
            type="file"
            className="hidden"
            onChange={handleUpload}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {files.map((file) => (
          <div
            key={file.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              {file.type === "folder" ? (
                <FaFolder className="text-yellow-500 text-3xl" />
              ) : (
                <FaFileAlt className="text-blue-500 text-3xl" />
              )}
              <div>
                <p className="font-semibold text-gray-900 dark:text-white truncate w-40">
                  {file.name}
                </p>
                <p className="text-sm text-gray-500">
                  {file.type === "file" ? file.size : "Folder"}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleDelete(file.id)}
              className="mt-4 flex items-center justify-center gap-2 bg-[#33cd33] text-white px-3 py-2 rounded-lg hover:bg-[#0acc0a] transition"
            >
              <FaTrash /> Delete
            </button>
          </div>
        ))}

        {files.length === 0 && (
          <p className="col-span-full text-center text-gray-500 italic">
            No files available 📂
          </p>
        )}
      </div>
    </div>
  );
};

export default FileManager;
