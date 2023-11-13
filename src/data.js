

let nextId = 0;
function createTodos(title,complete=false){
  return{
    id:nextId+=1,
    title,
    complete
  }
}

function initialTodos(){
  return[
    createTodos("Redux Frist Steps", true),
    createTodos("Redux From scratch",false),
    createTodos("Redux Toolkit", false),
  ]
}

function getTodos(todos,show){
  const actives = todos.filter((todo)=>{
    return !todo.complete
  })
  const visibleTodos = show ? actives : todos
  return visibleTodos
}

export{
  createTodos,
  initialTodos,
  getTodos
}