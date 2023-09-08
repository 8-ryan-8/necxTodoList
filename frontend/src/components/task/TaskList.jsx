import React, { useState, useEffect } from 'react';
import './TaskList.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import TaskItem from './TaskItem';

export default function TaskList() {
  const [taskList, setTaskList] = useState([]);

  const getTasks = async () => {
    try {
      const { data } = await axios.get('/api/tasks/myTasks');
      setTaskList(
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      toast.success('Task Deleted');
      setTaskList(taskList.filter((task) => task._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="task-list">
      <div className="task-list-header">
        <button type="button" className="add-button">Add new</button>
      </div>
      {taskList.length > 0 ? (
        <table className="task-table">
          <tbody>
            {taskList.map((task) => (
              <TaskItem key={task._id} task={task} deleteTask={deleteTask} />
            ))}
          </tbody>
        </table>
      ) : 'No tasks found'}
    </div>
  );
}
