import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Register() {
  const register = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      await axios.post('/api/auth/register', user);
      toast.success('Register Successful');
    } catch (err) {
      console.log(err);
      toast.error('Register Failed');
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={register}>
        <label htmlFor="name">
          Name
          <input type="text" name="name" placeholder="Full Name" required />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name="email" placeholder="Email" required />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" placeholder="Password" required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <br />
    </div>
  );
}
