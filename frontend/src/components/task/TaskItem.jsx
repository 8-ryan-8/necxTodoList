import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../../styles/TaskItem.css';

export default function TaskItem({ task, deleteTask }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckedboxClick = async () => {
    try {
      setIsLoading(true);
      await axios.put(`/api/tasks/${task._id}`, {
        completed: !isCompleted,
      });
      setIsCompleted(!isCompleted);
      toast.success('Task Updated Successfully');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <tr className="task-item">
      <td className="task-item-checkbox">
        <div role="checkbox" aria-checked onChange={handleCheckedboxClick} disabled={isLoading}>
          <input type="checkbox" checked={isCompleted} tabIndex={-1} readOnly disabled={isLoading} />
        </div>
        <p>{task.title}</p>
      </td>
      <td className="task-item-status">{isCompleted ? 'Complete' : 'Incomplete'}</td>
      <td className="task-item-actions">
        <button type="button" className="delete-button" onClick={() => deleteTask(task._id)}>Delete</button>
      </td>
    </tr>
  );
}
