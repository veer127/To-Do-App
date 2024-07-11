// src/EditTask.js
import React from 'react';

function EditTask({ currentTask, setCurrentTask, updateTask, editIndex }) {

  // Handle form submission for updating an existing task
  const handleSubmit = (e) => {

    e.preventDefault(); // Prevent the default form submission behavior

     // Check if the current task input is not empty or only whitespace
    if (currentTask.trim()) {
      updateTask(editIndex, currentTask);// Call the updateTask function to update the task at editIndex with currentTask
    
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      {/* Input field for editing an existing task */}
      <input
        type="text"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)}
        placeholder="Edit task"
      />

      {/* Button to submit the updated task */}
      <button type="submit" className='update'>Update Task</button>
      
    </form>
  );
}

export default EditTask;
