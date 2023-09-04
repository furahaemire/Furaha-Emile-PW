import React from 'react'
import Navbar from "./include/Navbar";
import Footer from './components/Footer';


function Login() {
  return (
    <div>
    <Navbar></Navbar>
   
    <div class="containerq">
        <h3>Please fill this form to login:</h3>
        <form action="#" method="post" onsubmit="return newTeacherValidation();" enctype="multipart/form-data">

          <div class="row">
            <div class="col-25">
              <label for="fname">Phone:</label>
            </div>
            <div class="col-75">
              <input type="text" name="studentName" id="fname" required="" placeholder='phone'/>
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="fname">Password:</label>
            </div>
            <div class="col-75">
              <input type="text" name="studentName" id="fname" required="" placeholder='password'/>
            </div>
          </div>
          <br />
          <input type="submit" name="submit"value="Login" />


        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login