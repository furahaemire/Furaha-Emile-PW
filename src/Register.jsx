import React from 'react';
import './style/index.css';
import Navbar from "./include/Navbar";




function Register() {
  return (
    <div>
      <Navbar></Navbar>
      
      <div class="containerq">
        <h3>Please fill this form:</h3>
        <form action="#" method="post" enctype="multipart/form-data">

          <div class="row">
            <div class="col-25">
              <label for="fname">First Name:</label>
            </div>
            <div class="col-75">
              <input type="text" name="studentName" id="fname" required="" placeholder='First name' />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="fname">Last Name:</label>
            </div>
            <div class="col-75">
              <input type="text" name="studentName" id="fname" required="" placeholder='last name' />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="fname">Phone:</label>
            </div>
            <div class="col-75">
              <input type="text" name="studentName" id="fname" required="" placeholder='phone' />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="fname">Password:</label>
            </div>
            <div class="col-75">
              <input type="text" name="studentName" id="fname" required="" placeholder='password' />
            </div>
          </div>
          <br />
          <input type="submit" name="submit" value="Create" />


        </form>
      </div>
      
    </div>
  )
}

export default Register