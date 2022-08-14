import React from 'react';
import "./Css/Login.css"


function Login() {
  const show=()=> {
    var password = document.getElementById("password");
    var icon = document.querySelector(".fas fa-eye");

    // ========== Checking type of password ===========
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
  return (
    <>
   <div>
  <div className="login-page">
    <div className="form">
      <form>
        <lottie-player src="https://assets4.lottiefiles.com/datafiles/XRVoUu3IX4sGWtiC3MPpFnJvZNq7lVWDCa8LSqgS/profile.json" background="transparent" speed={1} style={{justifyContent: 'center'}} loop autoPlay />
        <input type="text" placeholder="full name" />
        <input type="text" placeholder="email address" />
        <input type="text" placeholder="pick a username" />
        <input type="password" id="password" placeholder="set a password" />
        <i className="fas fa-eye" onClick={show} />
        <br />
        <br />
      </form>
      <form className="login-form">
        <button type="button" onClick="window.location.href='login.html'">
          SIGN UP
        </button>
      </form>
    </div>
  </div>
</div>

    </>

  )

}

export default Login;