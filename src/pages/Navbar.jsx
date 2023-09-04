import React from 'react';
import { Link } from "react-router-dom";
import account from "../image/account.png";
import mypic from "../image/mypic.png"
import About from './About';

function Navbar() {
  return (
    <div>

<div class="row">
        <div class="left">
          <div class="col1" >
          <Link to="/">
            <img src={account} />
            </Link>
            <h4>Home</h4>
            
            <Link to="/About">
            <img src={account} />
            </Link>
            <h4>About me</h4>

            <img src={account} />
            <h4>Resume</h4>

            <img src={account} />
            <h4>Portifolio</h4>

            <img src={account} />
            <h4>Blog</h4>

            <img src={account} />
            <h4>Contact</h4>
          </div>




          <div class="col2" >
            <img src={mypic} />
            <h2>FURAHA EMILE</h2>
            <p>Web Developer</p>
            <button>Download CV</button>
            <div class="footer">
              <p>Copyright &copy;  Furaha Emile</p>
            </div>
          </div>
        </div>





        {/* add  in another page */}
       



      </div>


    </div>
  )
}

export default Navbar