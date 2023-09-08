import React from 'react';
import Newsfeed from '../components/taskNewsfeed/Newsfeed';
import Navbar from '../components/nav/Navbar';
import '../styles/TaskNewsfeed.css';

export default function TaskNewsfeed() {
  return (
    <div className="newsfeed-container">
      <Navbar />
      <div className="heading-container">
        <h1 className="page-heading">Task Newsfeed</h1>
      </div>
      <Newsfeed />
    </div>
  );
}
