import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    
    <div className='App'>
      <h1> My ToDo App </h1>
      <div>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}
      placeholder="Add a task..." />
      <button onClick={addTask}> Add Task </button>
    </div>
    <ul>
      {tasks.map((task, index) => (
      <li key={index}>
        {task}
        <button onClick={() => removeTask(index)}> Remove </button>
      </li>
      ))}
    </ul>
  </div>

  );

}

export default App
