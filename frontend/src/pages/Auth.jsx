import React from 'react';
import Layout from '../components/Layout';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import './Auth.css';

export default function Auth() {
  return (
    <Layout>
      <div className="auth-container">
        <Login />
        <Register />
      </div>
    </Layout>
  );
}
