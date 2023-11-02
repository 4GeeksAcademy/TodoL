import React from "react";
import { useState } from "react";
import "./App.css"; 



function TodoItem ({label, is_done, delete_todo, toggle_todo }) { 
	return (
		<div className="todo-item ">
				<input type="checkbox" checked = {is_done} onChange={toggle_todo}/>
				<span className="todo-text">{label}</span>
				<button className="btn btn-danger" onClick={delete_todo}>Cross out</button>
		</div>
	)
}


function App () {
const [todos, setTodos] = useState([
	{label: "Play Video Games", is_done: false},
	{label: "Run for 5 miles", is_done:false}
]); 




	return (
		<form  className="container d-flex flex-column align-items-center justify-content-start">
			<h1>Todo List</h1>
			<input className="form-control form-control-lg" type="text" placeholder="Enter your tasks here" aria-label="input field"></input>
		
		{todos.map((item) => (
			<TodoItem label = {item.label} 
			is_done={item.is_done}
			toggle_todo = {()=>
			setTodos (
			todos.toSpliced (idx , 1, {
				label: item.label,	
				is_done: !item.is_done,
			})
			)
			} 
			/>
))}
		</form>
	);
};

export default App;




