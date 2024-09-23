import React from "react";
import check from '../assets/check.png'; 
import trash from '../assets/trash.png'; 
import edit from '../assets/edit.png';

const Todo = ({ task, deleteTodo, toggleComplete, editTodo }) => {
  if (!task) {
    return null;
  }

  const isDisabled = task.completed;

  return (
    <div className="Todo">
      <p className={`todo-text ${isDisabled ? "completed" : ""}`}>{task.task}</p>
      <div className="icons">
        <div
          className="icon-wrapper"
          onClick={() => !isDisabled && editTodo(task.id)}
        >
          <img
            src={edit}
            alt="Edit"
            style={{ opacity: isDisabled ? 0.5 : 1 }}
          />
          <span style={{ color: isDisabled ? '#888' : '#ffffff' }}>Edit</span>
        </div>
        <div
          className="icon-wrapper"
          onClick={() => !isDisabled && deleteTodo(task.id)}
        >
          <img
            src={trash}
            alt="Delete"
            style={{ opacity: isDisabled ? 0.5 : 1 }}
          />
          <span style={{ color: isDisabled ? '#888' : '#ffffff' }}>Delete</span>
        </div>
        <div className="icon-wrapper" onClick={() => toggleComplete(task.id)}>
          <img
            src={check}
            alt="Done"
          />
          <span>Done</span>
        </div>
      </div>
    </div>
  );
};

export default Todo;
