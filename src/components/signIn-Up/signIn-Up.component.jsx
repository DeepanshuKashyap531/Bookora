import React, { useState } from 'react';
import './signIn-Up.styles.scss';

const SignInAndUp = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignInClick = () => setIsRightPanelActive(false);
  const handleSignUpClick = () => setIsRightPanelActive(true);

  return (
    <div className="mainSignInAndUp-container">
      <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">       
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account Now</h1>
            <div className="social-container">
              <a href="#" className="social"><i class="fa-brands fa-google"></i></a>
            </div>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <br />
            <button>Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
            </div>
            <span>Login to existing account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <br />
            <button>Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
               <br/>
              <button className="ghost" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
             <br/>
              <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInAndUp;
