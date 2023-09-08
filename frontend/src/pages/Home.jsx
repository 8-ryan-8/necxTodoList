import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/nav/Navbar';
import TaskList from '../components/task/TaskList';
import '../styles/Home.css';

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="content-container">
        <div className="heading-container">
          <h1 className="todo-heading">My Todo List</h1>
        </div>
        <TaskList />
      </div>
    </Layout>
  );
}
