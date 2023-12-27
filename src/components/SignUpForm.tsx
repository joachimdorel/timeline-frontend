import axios from "axios";
import React, { useState } from "react";

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("form submitted");

    try {
      const response = await axios.post('http://localhost:3000/signup', { email, password });
      console.log(response.data);
    } catch (error) {
      console.log('An error occured during the sign up');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;