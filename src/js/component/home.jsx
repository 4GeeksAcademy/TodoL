import React from "react";
import { useState } from "react";
import "./App.css";

function TodoItem({ label, is_done, delete_todo, toggle_todo }) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={is_done} onChange={toggle_todo} />
      <span className="todo-text">{label}</span>
      <button type= "button" className="btn btn-danger" onClick={delete_todo}>
        Cross out
      </button>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();

        if (todoInput.length > 0) {
          setTodos([
            {
              label: todoInput,
              is_done: false,
            },
            ...todos,
          ]);
          setTodoInput("");
        }
      }}
      className="container d-flex flex-column align-items-center justify-content-start" >
      <h1>Todo List</h1>
	  <img src="https://cdn.pixabay.com/photo/2016/06/20/22/24/robot-1470108_1280.png" alt="todo image" />
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Enter your tasks here"
        aria-label="input field"
        value={todoInput}
        onChange={(ev) => setTodoInput(ev.target.value)}
      ></input>

      {todos.map((item, idx) => (
        <TodoItem
          key={idx}
          label={item.label}
          is_done={item.is_done}
          toggle_todo={() =>
            setTodos(
              todos.toSpliced(idx, 1, {
                label: item.label,
                is_done: !item.is_done,
              })
            )
          }
          delete_todo={() => setTodos(todos.toSpliced(idx, 1))}
        />
      ))}
	<small>{todos.filter(item => !item.is_done).length} Tasks left to do 🤷‍♂️</small>
    </form>
  );
}

export default App;
