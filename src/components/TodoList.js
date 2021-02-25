import React from 'react';
import Todo from "./Todo"

function TodoList({ todos,toggleComplete ,removeTodo }) {
    return(
        <div class="box">
            <ul>
                {todos.map(todo => (
                    <Todo todo={todo} key={ todo.id } toggleComplete={toggleComplete} removeTodo={removeTodo}/>
                ))}
            </ul>
        </div>     
    );
}
export default TodoList;