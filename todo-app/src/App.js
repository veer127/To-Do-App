 //App.js
import React, { useState } from 'react';
import AddTask from './AddTask';
import EditTask from './EditTask';
import TaskList from './TaskList';

function App() {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);
  
  // State to store the current task being added or edited
  const [currentTask, setCurrentTask] = useState('');
  
  // State to determine if we are in edit mode
  const [isEditing, setIsEditing] = useState(false);
  
  // State to store the index of the task being edited
  const [editIndex, setEditIndex] = useState(null);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Function to set a task for editing
  const editTask = (index) => {
    setCurrentTask(tasks[index].text);
    setIsEditing(true);
    setEditIndex(index);
  };

  // Function to update an existing task
  const updateTask = (index, updatedText) => {
    const newTasks = [...tasks];
    newTasks[index].text = updatedText;
    setTasks(newTasks);
    setIsEditing(false);
    setCurrentTask('');
  };

  // Function to toggle the completion status of a task
  const toggleCompleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      {/* Conditionally render AddTask or EditTask component based on editing state */}
      {isEditing ? (
        <EditTask 
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
          updateTask={updateTask}
          editIndex={editIndex}
        />
      ) : (
        <AddTask 
          addTask={addTask} 
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
        />
      )}
      <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask} 
        editTask={editTask}
        toggleCompleteTask={toggleCompleteTask}
      />
    </div>
  );
}

export default App;
