import  { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../App.css";
import { FaHome, FaBars, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Navbar from "../Pages/Navbar";

const routes = [
  { path: "", name: "Home", icon: <FaHome /> }, 
  { path: "users", name: "Users", icon: <FaUser /> },
  { path: "messages", name: "Messages", icon: <MdMessage /> },
  { path: "analytics", name: "Analytics", icon: <BiAnalyse /> },
  { path: "file-manager", name: "File Manager", icon: <AiTwotoneFileExclamation /> },
  { path: "order", name: "Order", icon: <BsCartCheck /> },
  { path: "saved", name: "Saved", icon: <AiFillHeart /> },
  { path: "settings", name: "Setting", icon: <BiCog /> },
];


const MOBILE_BREAKPOINT = 768;

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      const isCurrentlyMobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(isCurrentlyMobile);

      if (isCurrentlyMobile) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const inpAnimation = {
    hidden: { width: 0, padding: 0, opacity: 0, transition: { duration: 0.2 } },
    show: {
      width: "140px",
      padding: "5px 10px",
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="flex min-h-screen">
      <motion.div
        animate={{ width: isOpen ? "250px" : "50px" }}
        className={`text-white border-r top-0 left-0 z-50 md:sticky md:top-0 ${
          isOpen ? "" : "shadow-2xl"
        } bg-white dark:bg-gray-900`}
      >
        <div className="top-section flex items-center p-2.5">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.1 }}
                className="logo text-xl  font-bold ml-3 whitespace-nowrap]"
              >
                SideBar
              </motion.h1>
            )}
          </AnimatePresence>

          <div
            className={`menu-bar text-black dark:text-white ml-auto cursor-pointer ${
              !isOpen ? "mx-auto ml-0" : ""
            } `}
          >
            <FaBars onClick={toggle} size={20} />
          </div>
        </div>

        <div className="search flex items-center my-4 mx-2.5 p-1 shadow bg-white dark:bg-gray-800 transition-colors duration-300 ">
          <div className={`search-icon text-gray-800 dark:text-white p-1 ${!isOpen ? "mx-auto" : ""}`}>
            <BiSearch size={20} />
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inpAnimation}
                type="text"
                placeholder="Search"
                className="bg-transparent rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-0 border-none flex-grow"
              />
            )}
          </AnimatePresence>
        </div>

        <section className="routes p-2">
          {routes.map((ele) => (
            <NavLink
              to={ele.path}
              key={ele.name}
             className={({ isActive }) => 
                        `link flex items-center p-2 my-2 rounded-md font-semibold transition-all duration-300
                        text-gray-700 dark:text-gray-200 
                        hover:bg-gray-200 dark:hover:bg-black 
                        ${!isOpen ? "justify-center" : ""} 
                        ${isActive 
                            ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white" 
                            : "" 
                        }`
                    }
            >
              <div className={`icon text-lg ${isOpen ? "mr-4" : "mr-0"}`}>
                {ele.icon}
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="link-text whitespace-nowrap overflow-hidden"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {ele.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>

      <main
        className="grow h-screen overflow-auto bg-gray-100 text-gray-900
                   dark:bg-gray-900 dark:text-green-400"
      >
        <div>
          <Navbar />
        </div>
        {children}
      </main>
    </div>
  );
};

export default SideBar;
