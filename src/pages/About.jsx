import React from 'react'
import Navbar from '../include/Navbar'

function About() {
  return (
    <div>
      <Navbar />
      <div class="row">
        <div class="right">

          <div class="col3">
            <h3 class="mb-2 mt-0 text-3xl font-medium leading-tight text-primary ml-4 mt-6">
              <b>ABOUT<b class="text-cyan-400 font-black"> ME </b></b>
            </h3>
            <p class="ml-4 mr-4">I am self-taught, but I honestly 
             believe that with the amount of tutorials on YouTube and other online platform, one can 
             learn everything–including HTML, CSS and PHP, react, and other technology skills without 
              going to college. I’ve tried to make my living as a freelance front end web developer,
               but now with my first son on the way, I am looking for a job-security, 
               and decided to apply for the position you advertise. 
  
            </p>
          </div>
          <div class="col4 mt-10">
          <p class="text-cyan-400 font-black ml-2 mr-4">Resident:</p>
          <p class="text-cyan-400 font-black ml-2 mr-4">Adress:</p>
          <p class="text-cyan-400 font-black ml-2 mr-4">Email:</p>
          <p class="text-cyan-400 font-black ml-2 mr-4">Phone:</p>
          </div>



        </div>
      </div>
    </div>
  )
}

export default About