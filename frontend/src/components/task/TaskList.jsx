import React, { useState, useEffect } from 'react';
import '../../styles/TaskList.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import TaskItem from './TaskItem';

export default function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newTask, setNewTask] = useState('');
  const todoMaxLength = 60;
  const todoMinLength = 5;

  function isWhitespace(str) {
    return /^\s*$/.test(str);
  }

  const addNewTask = async (e) => {
    e.preventDefault();
    if (newTask.length <= 0) {
      toast.error('Task is empty');
      return;
    }

    try {
      // checks todo length
      if (newTask.length > todoMaxLength || newTask.length < todoMinLength) {
        toast.error(`Todo must be between ${todoMinLength} and ${todoMaxLength} characters`);
        return;
      }

      // checks if only white space
      if (isWhitespace(newTask)) {
        console.log('is Whitespace');
        toast.error('Todo must contain non-whitespace');
        return;
      }

      const { data } = await axios.post('/api/tasks', {
        title: newTask,
      });
      toast.success('New Task Created');
      setTaskList([{ ...data }, ...taskList]);
      setNewTask('');
      setIsAddingNew(false);
    } catch (err) {
      console.log(err);
    }
  };

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

  const addNewButtonClick = () => {
    setIsAddingNew(!isAddingNew);
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
        <button type="button" className="add-button" onClick={addNewButtonClick}>Add new</button>
      </div>
      {isAddingNew && (
        <form onSubmit={addNewTask}>
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Task Name" />
          <button type="submit">Add</button>
        </form>
      )}
      {taskList.length > 0 ? (
        <table className="task-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th> </th>
            </tr>
          </thead>
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
