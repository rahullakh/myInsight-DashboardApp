import  { useContext } from 'react';
import { FaMoon,FaSun } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContextProvider';
const Navbar = () => {
  const{theme,toggleTheme} = useContext(ThemeContext);

  return (
    <div className=' py-4 px-4 border-b border-gray-300 flex items-center justify-between dark:border-gray-600  dark:bg-gray-900 dark:text-green-400'>
      <h1 className='text-2xl font-semibold'>Dashboard</h1>
      <button className='text-2xl text-dark cursor-pointer' onClick={toggleTheme}>
        {theme === "light" ? <FaMoon></FaMoon> : <FaSun></FaSun>}
      </button>
    </div>
  )
}

export default Navbar
