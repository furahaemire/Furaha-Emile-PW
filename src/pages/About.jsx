import React from 'react'
import Navbar from '../include/Navbar'
import { GiGreenhouse } from "react-icons/gi"
import { IconContext } from 'react-icons';
import { MdOutlineComputer } from "react-icons/md"
import { CgWebsite } from "react-icons/cg"
import { CiMobile3 } from "react-icons/ci"


function About() {
  return (
    <div>
      <Navbar />
      <div class="right">
        <div class="container ml-4">{/* about me section */}
          <h3 class="mb-2 text-3xl font-medium leading-tight text-primary  mt-10">
            <b>ABOUT<b class="text-cyan-400 font-black"> ME </b></b>
          </h3>

          <div class="card">
            <p class="">I am self-taught, but I honestly
              believe that with the amount of tutorials on YouTube and other online platform, one can
              learn everything–including HTML, CSS and PHP, react, and other technology skills without
              going to college. I’ve tried to make my living as a freelance front end web developer,
              but now with my first son on the way, I am looking for a job-security,
              and decided to apply for the position you advertise.
            </p>
          </div>

          <div class="card">
            <p class="text-black"> <b class="text-cyan-400 font-black ml-2 mr-4">Resident</b>Rwanda</p>
            <p class="text-black"> <b class="text-cyan-400 font-black ml-2 mr-4">Adress</b> Kigali-Rwanda</p>
            <p class="text-black"> <b class="text-cyan-400 font-black ml-2 mr-4">Email</b>furahaemire5@gmail.com</p>
            <p class="text-black"> <b class="text-cyan-400 font-black ml-2 mr-4">Phone</b>+250785911888</p>
          </div>
        </div>


        <h3 class="mb-2 text-3xl font-medium leading-tight text-primary ml-4 mt-10 mb-8">
          <b>WHAT<b class="text-cyan-400 font-black"> I DO </b></b>
        </h3>
       
        <div class="container ml-4"> {/* what i do  */}
        <div class="card">
        <IconContext.Provider value={{ size: '2.5rem', color: '#7dd3fc', }}>
                <GiGreenhouse />
                <p class="text-xl font-black mt-2  mb-2">Ecommerce</p>
                <p>Ecommerce web development is the process of building an ecommerce website.
                  Frontend and backend development for ecommerce sites include checkout systems,
                  payment processing, site security, and more.
                </p>
              </IconContext.Provider>
          </div>

          <div class="card">
          <IconContext.Provider value={{ size: '2.5rem', color: '#7dd3fc', }}>
                <CgWebsite />
                <p class="text-xl font-black mt-2  mb-2">Website</p>
                <p>Ecommerce web development is the process of building an ecommerce website.
                  Frontend and backend development for ecommerce sites include checkout systems,
                  payment processing, site security, and more.
                </p>
              </IconContext.Provider>
          </div>

          <div class="card">
          <IconContext.Provider value={{ size: '2.5rem', color: '#7dd3fc', }}>
                <MdOutlineComputer />
                <p class="text-xl font-black mt-2  mb-2">Ecommerce</p>
                <p>Ecommerce web development is the process of building an ecommerce website.
                  Frontend and backend development for ecommerce sites include checkout systems,
                  payment processing, site security, and more.
                </p>
              </IconContext.Provider>
          </div>

          <div class="card">
          <IconContext.Provider value={{ size: '2.5rem', color: '#7dd3fc', }}>
                <CiMobile3 />
                <p class="text-xl font-black mt-2  mb-2">Mobile App</p>
                <p>Ecommerce web development is the process of building an ecommerce website.
                  Frontend and backend development for ecommerce sites include checkout systems,
                  payment processing, site security, and more.
                </p>
              </IconContext.Provider>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About