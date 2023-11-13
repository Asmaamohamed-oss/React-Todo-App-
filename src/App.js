import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './todos-task/TodoList';

function App() {
  return (  
    <div className='container my-5 '>
      <TodoList />
    </div>
  );  
}




export default App;
