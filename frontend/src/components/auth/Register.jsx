import React from 'react';

export default function Register() {
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
