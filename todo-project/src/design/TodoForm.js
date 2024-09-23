import React, { useState } from "react";
import '../design/style.css';

const TodoForm = ({ addTodo, todos = [] }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="TodoForm">
      <h1>Things to Do 📃:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="todo-input"
          placeholder="Input Task"
        />
        <button type="submit" className="todo-btn">Add Task</button>
        {todos.length === 0 && <p>No todos available. Add a todo to get started!</p>}
      </form>
    </div>
  );
};

export default TodoForm;
