import React, { useState, useEffect } from 'react';
import './TaskItem.css';

export default function TaskItem({ task, deleteTask }) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  useEffect(() => {
    setIsCompleted(task.isCompleted);
  }, []);

  return (
    <tr className="task-item">
      <td className="task-item-checkbox">
        <div>
          <input type="checkbox" checked={isCompleted} tabIndex={-1} readOnly />
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
