import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const { data } = await axios.get('/api/users/me');
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get('/api/auth/logout');
      setUser(null);
      toast.success('User Logged Out');
      navigate('/auth');
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) return null;

  return (
    <div className="navbar">
      <header>
        <div className="user-info">
          <FaUserAlt />
          <div className="user-details">
            <h1 className="username">
              username:
              {' '}
              {user.name}
            </h1>
            <h2 className="email">
              email:
              {' '}
              {user.email}
            </h2>
            <Link to="/edit-profile" className="edit-link">Edit</Link>
          </div>
        </div>
        <nav>
          <button type="button" onClick={handleLogout} className="logout-button">Logout</button>
        </nav>
      </header>
    </div>
  );
}