import { useState } from "react";

import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const [showSignUp, setShowSignUp] = useState(false);
  const handleSignUpClick = () => {
    setShowSignUp(true);
  };
  return (
    <>
      <h1>
        WELCOME TO <span className="red">T</span>
        <span className="orange">E</span>
        <span className="yellow">T</span>
        <span className="green">R</span>
        <span className="blue">I</span>
        <span className="purple">S</span>...ish
      </h1>
      {!showLogin ? (
        <button className="login-button" onClick={handleLoginClick}>
          LOGIN
        </button>
      ) : (
        <Login />
      )}

      {!showSignUp ? (
        <button className="sign-up-button" onClick={handleSignUpClick}>
          SIGN UP
        </button>
      ) : (
        <Signup />
      )}
    </>
  );
};

export default Auth;
