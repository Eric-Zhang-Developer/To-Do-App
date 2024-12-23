import './TodoList.css'
import TodoInput from './TodoInput/TodoInput'
import TodoItem from './TodoItem/TodoItem'


function TodoList(){
  const addNewTodo = (text) =>{
    console.log("Time to add a new To-do! To-Do:" + text)
  }
  return(
    <>
      <TodoInput onAddTodo={addNewTodo}></TodoInput>
    </>
  )
}

export default TodoList