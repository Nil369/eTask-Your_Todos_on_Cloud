import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? 'bg-gray-500 text-white' : 'bg-violet-200 text-black'} py-4 text-center bottom-0`}>
      <b>Akash Halder &copy; All copyright reserved</b>
    </footer>
  );
};

export default Footer;
