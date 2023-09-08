import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await axios.post('/api/auth/login', {
        email,
        password,
      });
      navigate('/');
      toast.success('Login Success');
    } catch (err) {
      console.log(err);
      toast.error('Login Failed');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor="email">
          Email
          <input type="email" name="email" placeholder="Email" required />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" placeholder="Password" required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
