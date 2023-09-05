import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './include/Navbar';



function App() {
  return (
    <div>
      <Navbar />
      <div class="right">
        <div class="home">
          <h1 class="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">
            <b>FURAHA EMILE...</b>
          </h1>
          <p className="mb-4 mt-6 text-xl font-light leading-relaxed">
            Frontend-Developer
          </p>
        </div>
      </div>
    </div>

  )
}

export default App
