import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/NewsfeedItem.css';

export default function TaskItem({ task }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  return (
    <tr className="task-item">
      <td>
        <p>{task.title}</p>
      </td>
      <td className="task-item-status">{isCompleted ? 'Complete' : 'Incomplete'}</td>
    </tr>
  );
}
