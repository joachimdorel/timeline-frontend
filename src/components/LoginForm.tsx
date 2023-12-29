import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // const response = await axios.post('http://localhost:3000')
    } catch (error) {
      
    }
  };
  return (
    <div>
      <div>
        Login
      </div>
    </div>
  )
};

export default LoginForm;