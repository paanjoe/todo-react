import React, { useState } from 'react';
import {v4} from 'uuid';

function TodoForm({ addTodo }) {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: v4() });
            setTodo({ ...todo, task: "" });
        }
    }

    return(
            <form onSubmit={ handleSubmit }>
                <div class="column">
                    <div class="column is-four-fifths">
                        <input 
                        class="input is-primary"
                        placeholder="Todo..."
                        onChange={handleTaskInputChange}
                        value={todo.task}
                        name="task"
                        type="text"
                        />
                    </div>
                    <div class="column">
                        <button class="button is-warning" type="submit">Submit</button>
                    </div>
                </div>         
            </form>     
            
    );
}

export default TodoForm;