import React, { useState } from "react"; 
import "./Css/Signup.css"

function Signup() {
  const show =()=>{
    var password = document.getElementById("password");
    var icon = document.querySelector(".fas fa-eye")

    // ========== Checking type of password ===========
    if(password.type === "password"){
      password.type = "text";
    }
    else {
      password.type = "password";
    }
  };
  return (
   <div class="body">
<div className="login-page">
  <div className="form1">
    <form>
      <lottie-player src="https://assets4.lottiefiles.com/datafiles/XRVoUu3IX4sGWtiC3MPpFnJvZNq7lVWDCa8LSqgS/profile.json" background="transparent" speed={1} style={{justifyContent: 'center'}} loop autoPlay />
      <input type="text" placeholder="  username" />
      <input type="password" id="password" placeholder="  password" />
      <i className="fas fa-eye" onClick={show} />
      <br />
      <br />
      <button>LOGIN</button>
      <p className="message" />
    </form>
    <form className="login-form">
      <button type="button" onclick="window.location.href='signup.html'">SIGN UP</button>
    </form>
  </div>
</div>
</div>
  );
}
export default Signup;