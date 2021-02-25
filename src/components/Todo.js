import React from 'react';

function Todo({todo,toggleComplete, removeTodo}) {

    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick(id) {
        removeTodo(todo.id);
    }
    return (
            <li>
                <label class="checkbox" style={{ textDecoration: todo.completed ? "line-through": null}}>
                    <input type="checkbox" onClick={handleCheckboxClick}/>
                    &nbsp;{todo.task}
                    <button class="delete" onClick={handleRemoveClick}></button>
                </label>
                
            </li>
    ); 
}

export default Todo;