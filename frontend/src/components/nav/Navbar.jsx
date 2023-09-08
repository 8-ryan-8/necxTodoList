import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { ImProfile } from 'react-icons/im';

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

  const goToNewsFeed = () => {
    navigate('/TaskNewsfeed');
  };

  const goHome = () => {
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="navbar">
      <header>
        <div className="user-info">
          <ImProfile className="user-icon" />
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
          </div>
        </div>
        <nav className="nav-buttons">
          <button type="button" onClick={goHome} className="nav-button">Home</button>
          <button type="button" onClick={goToNewsFeed} className="nav-button">Task Newsfeed</button>
          <button type="button" onClick={handleLogout} className="nav-button">Logout</button>
        </nav>
      </header>
    </div>
  );
}
