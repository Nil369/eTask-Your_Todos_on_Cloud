import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'

const About = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
     <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className={`min-h-screen py-10 px-5 md:container md:mx-auto ${darkMode ? 'bg-gray-900 text-white' : 'bg-violet-200 text-black'}`}>
        <div className="flex flex-col items-center text-center mb-10">
          <img
            src="/Formal Pic.jpg" // Replace with your actual image URL
            alt="Akash Halder"
            className="w-80 h-90 rounded-full shadow-2xl mb-5"
          />
          <h1 className="text-4xl font-bold">Akash Halder</h1>
          <p className="mt-4 text-lg font-semibold ">Full Stack Web Developer || MERN Stack Developer || Video Editor || C(Programming language) || C++ || Python || ML enthusiast 🤖</p>
          <p className="mt-4 max-w-2xl">
            Hi 👋🏼 I'm Akash Halder, a dynamic professional with expertise in video editing, graphic design, and full-stack web development.
            <br /><br />
            ► Video Editing and Graphic Design: I excel in transforming ideas into captivating visual stories, leveraging industry-standard tools and a keen eye for design aesthetics.
            <br /><br />
            ► Full Stack Web Development: My proficiency spans front-end (HTML, CSS, JavaScript, React, Next.js, Vite, Next.js) to back-end (Python, Django, Flask, node.js, MongoDB) development. I'm dedicated to creating scalable, user-friendly web applications.
            <br /><br />
            ► Programming Languages and Frameworks: Fluent in C, C++, Python, and JavaScript, I use frameworks like Django, Next.js, Flask to optimize development processes and drive project efficiency.
            <br /><br />
            ► Continuous Learning and Innovation: Committed to staying ahead in technology, I embrace ongoing learning to bring cutting-edge solutions to every project.
            <br /><br />
            Let's connect and explore how my diverse skill set can enhance your projects and bring creative visions to life!
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center mb-5">How to Use the Todo App</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">This todo app is designed to help you manage your tasks efficiently. Here's a quick guide on how to use it:</p>
            <ul className="list-disc list-inside">
              <li><strong>Add a Task:</strong> Enter your task in the input field and click the "Save" button to add it to your list.</li>
              <li><strong>Edit a Task:</strong> Click the edit button next to a task to modify its content.</li>
              <li><strong>Delete a Task:</strong> Click the delete button next to a task to remove it from your list.</li>
              <li><strong>Mark as Completed:</strong> Check the checkbox next to a task to mark it as completed. You can toggle the visibility of completed tasks using the "Show Finished" checkbox.</li>
              <li><strong>Dark Mode:</strong> Use the toggle button on the navbar to switch between dark and light modes for better readability and comfort.</li>
            </ul>
          </div>
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </>
  )
}

export default About;
