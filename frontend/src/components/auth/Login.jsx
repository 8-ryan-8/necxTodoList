import React from 'react';

export default function Login() {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <label htmlFor="email">
          Email
          <input type="email" name="email" placeholder="Email" required />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" placeholder="Password" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
