import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import About from './pages/About';
import Resume from './pages/Resume';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "about",
        element: <About />,
    },
    {
        path: "resume",
        element: <Resume />,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />
    
  
);

