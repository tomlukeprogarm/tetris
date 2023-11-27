import { useState } from "react";

import Login from "./Login";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClick = () => {
    setShowLogin(true);
  };
  return (
    <>
      <h1>WELCOME TO TETRIS...ish</h1>
      {!showLogin ? (
        <button onClick={handleLoginClick}>LOGIN</button>
      ) : (
        <Login />
      )}
      <button>SIGN UP</button>
    </>
  );
};

export default Auth;
