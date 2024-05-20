import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import About from './components/About.jsx'
import { ThemeProvider, useTheme } from './ThemeContext';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/about",
    element:<About/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>

  </React.StrictMode>,
)
