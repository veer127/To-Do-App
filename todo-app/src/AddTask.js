//AddTask.js
import React from 'react';

function AddTask({ addTask, currentTask, setCurrentTask }) {
  // Handle form submission for adding a new task
  const handleSubmit = (e) => {

    e.preventDefault();// Prevent the default form submission behavior

    // Check if the current task input is not empty or only whitespace
    if (currentTask.trim()) {
      addTask(currentTask);// Call the addTask function to add the current task to the list
      setCurrentTask('');//After adding the task, this line will clear the input field by setting currentTask to an empty string
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for entering a new task */}
      <input
        type="text"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)}
        placeholder="Add a new task"
      />
      {/* Button to submit the new task */}
      <button type="submit" className="addtask" >Add</button>
    </form>
  );
}

export default AddTask;
