import React from 'react';
import { Link } from "react-router-dom";
// pages
import About from '../pages/About';
import Resume from '../pages/Resume';
// images
import mypic from "../image/mypic.png";
import { AiOutlineHome } from "react-icons/ai";
import { HiAcademicCap } from "react-icons/hi"
import { HiBriefcase } from "react-icons/hi"
import { HiOutlineUserCircle } from "react-icons/hi"
import { MdOutlineMail } from "react-icons/md"
import { IconContext } from 'react-icons';


function Navbar() {
  return (
    <div>

      <div class="row">
        {/* section A icons */}

        <div class="left">
          <div class="col1" >
            <div class="center" >
              <IconContext.Provider value={{ size: '2.5rem', color: '#d1e0e0', margin: '10px;' }}>
                <Link to="/">
                  <AiOutlineHome />
                </Link>
                <h4>Home</h4>

                <Link to="/About">
                  <HiOutlineUserCircle />
                </Link>
                <h4>About me</h4>

                <Link to="/Resume">
                  <HiAcademicCap />
                </Link>
                <h4>Resume</h4>

                <HiBriefcase />
                <h4>Portifolio</h4>

                <MdOutlineMail />
                <h4>Contact</h4>
              </IconContext.Provider>
            </div>
          </div>

          {/* section B profile [image] */}

          <div class="col2" >
            <img src={mypic} />
            <br />
            <br />
            <h3 class="mb-2 mt-0 text-3xl font-medium leading-tight text-primary">
              FURAHA EMILE
            </h3>
            <p>Web Developer</p>
            <br />
            <br />
            <br />
            <br />
            
            <div class="footer">
              <p>Copyright &copy;  Furaha Emile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar