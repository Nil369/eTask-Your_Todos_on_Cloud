import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`flex justify-between items-center py-3 ${darkMode ? ' sticky bg-gray-900 text-white' : 'sticky bg-indigo-900 text-white'}`}>
      <div className="flex items-center space-x-2">
        <img src="https://static-00.iconduck.com/assets.00/todo-icon-2048x2048-m7wp6prw.png" width="50" height="50" alt="Logo" />
        <span className='font-bold text-xl'>eTask</span>
      </div>
      <ul className="flex gap-8 mx-4">
        <Link to="/"><li className='cursor-pointer hover:font-bold transition-all duration-300'>Home</li></Link>
        <Link to = "/about"><li className='cursor-pointer hover:font-bold transition-all duration-300'>About</li></Link>
        <li className='cursor-pointer hover:font-bold transition-all duration-300' onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
