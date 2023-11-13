import React, { useState } from 'react'
import { useTodosContext } from "./TodoList";


export default function Todo({todo}) {
    // const [complete,setCompelte] = useState(todo.complete);
    const {
        visibleTodos: todos,
        deleteTodo,
        changeComplete,
    } = useTodosContext();
    
    const todoClassName = todo.complete ? "todo complete" : 'todo'
    return (
        <li className={todoClassName}>
            <input type="checkbox" checked={todo.complete} 
            onChange={(e)=>changeComplete(e.target.checked , todo.id)}/>
            <span>{todo.title}</span>
            <button onClick={()=>deleteTodo(todo.id)} className='btn btn-danger mx-3'>X</button>
        </li>
    );
}
