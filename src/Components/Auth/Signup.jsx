import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSignup = (e) => {
    e.preventDefault();
  };
  return (
    <form action={handleSignup}>
      <label htmlFor="Name">
        <input type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e => setName(e.target.value))}
        />
      </label>

      <label htmlFor="Age">
        <input 
        type="text" 
        placeholder="Your Age"
        value={age}
        onChange={(e => setAge(e.target.value))}
        />
      </label>

      <label htmlFor="Username">
        <input 
        type="text" 
        placeholder="Your Username"
        value={username}
        onChange={(e => setUsername(e.target.value))}
        />
      </label>

      <label htmlFor="Password">
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button type="submit">Create Your Account</button>
    </form>
  );
};

export default Signup;
