import React, { useState, useEffect } from 'react';
import '../../styles/Newsfeed.css';
import axios from 'axios';
import NewsfeedItem from './NewsfeedItem';

export default function Newsfeed() {
  const [taskList, setTaskList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const getAllTasks = async (page) => {
    try {
      const { data } = await axios.get(`/api/tasks/all?page=${page}&pageSize=${pageSize}`);
      setTaskList(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllTasks(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
      <div className="pagination-buttons">
        <button type="button" onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button type="button" onClick={handleNextPage} disabled={taskList.length === 0}>Next Page</button>
      </div>
    </div>
  );
}
