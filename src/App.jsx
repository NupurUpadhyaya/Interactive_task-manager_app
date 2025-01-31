import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import Footer from './components/Footer';
import { FaTasks } from 'react-icons/fa';
import MainBanner from './components/Mainbanner';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text, priority) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      priority,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText, newPriority) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText, priority: newPriority } : task
    ));
  };

  return (
    <>
      <Header />
      <MainBanner />
      <Banner />
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <FaTasks className="text-primary me-2" size={24} />
                  <h2 className="h4 mb-0">Task List</h2>
                </div>

                <TaskForm onAddTask={addTask} />

                <div className="mt-4">
                  <TaskList
                    tasks={tasks}
                    onToggleTask={toggleTask}
                    onDeleteTask={deleteTask}
                    onEditTask={editTask}
                  />

                  {tasks.length > 0 && (
                    <TaskStats tasks={tasks} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;