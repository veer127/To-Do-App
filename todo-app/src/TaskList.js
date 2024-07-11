 //TaskList.js
import React from 'react';

function TaskList({ tasks, deleteTask, editTask, toggleCompleteTask }) {
  return (
    <ul>
      {/* Iterate over tasks and display each one */}
      {tasks.map((task, index) => (

        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}

          <div>

            {/* Button to toggle completion status */}
            <button onClick={() => toggleCompleteTask(index)} title="Complete">
              <i className={`fa${task.completed ? 'r' : 's'} fa-check-circle`}></i>
            {/* fa-check-circle is a Font Awesome icon class for a check circle icon. */}
            </button>

            {/* Button to edit the task */}
            <button onClick={() => editTask(index)} title="Edit">
              <i className="fas fa-edit"></i>
            </button>

            {/* Button to delete the task */}
            <button onClick={() => deleteTask(index)} title="Delete">
              <i className="fas fa-trash-alt"></i>
            </button>

          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
