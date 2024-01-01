import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      console.log('login form submitted')
      // const response = await axios.post('http://localhost:3000/login', { email, password });
      // console.log(response);
    } catch (error) {
      console.log('An error occured during the login');
    }
  };

  return (
    <div className="flex justify-center my-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center capitalize font-semibold">
          Login
        </div>
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-2"
        >
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-blue-300 rounded-sm p1"
            required
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            className="border blue-blue-300 rounded-sm p-1"
            required
          />
          <button
            type="submit"
            className="bg-blue-900 border border-blue-900 text-white focus:bg-white focus:border-white focus:text-blue-800 rounded-sm p-1"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
};

export default LoginForm;