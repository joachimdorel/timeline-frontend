import axios from "axios";
import React, { useState } from "react";

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/signup', { email, password });
      console.log(response.data);
    } catch (error) {
      console.log('An error occured during the sign up');
    }
  }

  return (
    <div className="flex justify-center my-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center capitalize font-semibold">Sign up</div>
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-2"
        >
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-blue-300 rounded-sm p-1"
            required
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-blue-300 rounded-sm p-1"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className="border border-blue-300 rounded-sm p-1"
            required
          />
          <button 
            type="submit"
            className="bg-blue-900 border border-blue-900 text-white focus:bg-white focus:border-white focus:text-blue-800 rounded-sm p-1"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>

  );
};

export default SignUpForm;