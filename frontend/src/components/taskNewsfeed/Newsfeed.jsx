import React, { useState, useEffect } from 'react';
import '../../styles/Newsfeed.css';
import axios from 'axios';
import NewsfeedItem from './NewsfeedItem';

export default function Newsfeed() {
  const [taskList, setTaskList] = useState([]);

  const getAllTasks = async () => {
    try {
      const { data } = await axios.get('/api/tasks/all');
      setTaskList(
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="task-list">
      {taskList.length > 0 ? (
        <table className="task-table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task) => (
              <NewsfeedItem key={task._id} task={task} />
            ))}
          </tbody>
        </table>
      ) : 'No tasks found'}
    </div>
  );
}
