import React from "react";
import './login.css';


const Login = () => {
    return (
        <div className="login-page">
        <h1>Login Page</h1>
        <form className="login-form">
            <div className="input-container">
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="Username@email.com" required />
           
            </div>
            <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="Password" required />
           
            </div>
 
            <label htmlFor="remember-me">
                <input type="checkbox" id="remember-me" />
                Remember Me</label>
                <p>Forget Password?</p>

                <div className="inner-bottom">
          <button>Sign in</button>
          <p>or continue with</p>
          <div className="main-social-icon">
            <div className="social-icon">
              <img src="src/assets/Google.png" alt="" />
            </div>
            <div className="social-icon">
              <img src="src/assets/twitter.png" alt="" />
            </div>
            <div className="social-icon">
              <img src="src/assets/facebook.png" alt="" />
            </div>
          </div>
          <p>don't have an account yet? <span>Registered for free</span></p>
        </div>
        </form>
        </div>
    );
}
export default Login;