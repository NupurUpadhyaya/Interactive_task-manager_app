import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task, priority);
      setTask('');
      setPriority('medium');
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
          />
        </div>
        <div className="col-auto">
          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary d-flex align-items-center">
            <FaPlus className="me-2" />
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;