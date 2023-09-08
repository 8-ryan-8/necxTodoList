import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/NewsfeedItem.css';

export default function TaskItem({ task }) {
  return (
    <tr className="task-item">
      <td>{task.userName}</td>
      <td>{task._doc.title}</td>
      <td className="task-item-status">{task._doc.completed ? 'Complete' : 'Incomplete'}</td>
    </tr>
  );
}
