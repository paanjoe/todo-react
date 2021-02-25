import './App.css';
import React, { useState } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div class=".container.is-max-widescreen">
      <div class="notification is-primary">
      <section class="section">
        <h1 class="title">React Todo App</h1>
        <h2 class="subtitle"> A simple react todo app.</h2>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
      </section>
      </div>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            Created by Paan Joe
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
