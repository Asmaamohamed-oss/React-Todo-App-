import React from 'react'
import Todo from './Todo';
import { useTodosContext } from './TodoList';


export default function Todos() {
    const {visibleTodos:todos} = useTodosContext();
  return (
    <ul>
        {todos.length > 0 ? todos.map((todo)=>{
            return <Todo key={todo.id} todo={todo}/>
        }):<p>All Tasks Are Completed</p>}
    </ul>
  )
}
