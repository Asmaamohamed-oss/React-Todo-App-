import React, { createContext, useContext, useMemo, useState } from 'react'
import { createTodos, getTodos, initialTodos } from '../data';
import Todos from './Todos';

const todosContext = createContext(null)
export const useTodosContext =()=> useContext(todosContext)

export default function TodoList() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState(initialTodos);
    function addTodo(){
        setTodos([...todos,createTodos(title)])
        setTitle("")
    }

    function deleteTodo(id){
        setTodos(todos.filter(todo => id != todo.id))
    }

    function changeComplete(complete,id){
        setTodos(todos.map((todo)=>{
            if(todo.id == id){
                return {...todo,complete}
            }else{
                return todo
            }
        }))
    }
    
    const visibleTodos = useMemo(()=>{
        return getTodos(todos,show)
    },[todos,show])
    return (
        <todosContext.Provider value={{visibleTodos,deleteTodo,changeComplete}}>
            <div className='card'>
                <div className="card-header">
                    <div>
                        <input type="checkbox"  checked={show}
                        onChange={(e)=>setShow(e.target.checked)}
                        id="add"
                        />
                        <label htmlFor="add">Show  Active Todos</label>
                    </div>
                    <div className='d-flex mt-3'>
                        <input type="text" className='form-control' value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        />
                        <button className='btn btn-primary' disabled={title==""}
                        onClick={()=>addTodo()}
                        >Add</button>
                    </div>
                </div>
                <div className="card-body">
                    <Todos/>
                </div>
            </div>
        </todosContext.Provider>
    )
}
