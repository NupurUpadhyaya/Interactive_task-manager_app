import React from 'react';

function TaskStats({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const tasksByPriority = tasks.reduce((acc, task) => {
    acc[task.priority] = (acc[task.priority] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="mt-3">
      <div className="text-muted mb-2">
        <span className="me-3">Total tasks: <strong>{totalTasks}</strong></span>
        <span>Completed: <strong>{completedTasks}</strong></span>
      </div>
      <div className="d-flex gap-3">
        <span className="badge bg-success">Low: {tasksByPriority.low || 0}</span>
        <span className="badge bg-warning">Medium: {tasksByPriority.medium || 0}</span>
        <span className="badge bg-danger">High: {tasksByPriority.high || 0}</span>
      </div>
    </div>
  );
}

export default TaskStats;