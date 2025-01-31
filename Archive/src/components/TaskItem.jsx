import React, { useState } from 'react';
import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';

function TaskItem({ task, onToggleTask, onDeleteTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [editedPriority, setEditedPriority] = useState(task.priority);

  const handleSave = () => {
    if (editedText.trim()) {
      onEditTask(task.id, editedText, editedPriority);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditedText(task.text);
    setEditedPriority(task.priority);
    setIsEditing(false);
  };

  const getPriorityBadgeClass = (priority) => {
    const classes = {
      low: 'bg-success',
      medium: 'bg-warning',
      high: 'bg-danger'
    };
    return `badge ${classes[priority]} me-2`;
  };

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center flex-grow-1">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />
        </div>
        {isEditing ? (
          <div className="d-flex gap-2 ms-2 flex-grow-1">
            <input
              type="text"
              className="form-control"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              autoFocus
            />
            <select
              className="form-select w-auto"
              value={editedPriority}
              onChange={(e) => setEditedPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        ) : (
          <div className="ms-2">
            <span className={getPriorityBadgeClass(task.priority)}>
              {task.priority}
            </span>
            <span className={task.completed ? 'text-decoration-line-through text-muted' : ''}>
              {task.text}
            </span>
          </div>
        )}
      </div>
      <div className="btn-group ms-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="btn btn-outline-success btn-sm"
              title="Save"
            >
              <FaCheck />
            </button>
            <button
              onClick={handleCancel}
              className="btn btn-outline-secondary btn-sm"
              title="Cancel"
            >
              <FaTimes />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="btn btn-outline-primary btn-sm"
              title="Edit"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="btn btn-outline-danger btn-sm"
              title="Delete"
            >
              <FaTrash />
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TaskItem;