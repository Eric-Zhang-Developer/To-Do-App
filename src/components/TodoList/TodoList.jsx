import './TodoList.css'
import TodoInput from './TodoInput/TodoInput'
import TodoItem from './TodoItem/TodoItem'
import { useState } from 'react'


function TodoList(){
  const [todoArray, setToDoArray] = useState([]);

  const addNewTodo = (text) =>{
    const newTodo = {
      id: Date.now(),
      text: text,
      checked: false
    }
    setToDoArray([...todoArray, newTodo]);
  }
  return(
    <>
      <TodoInput onAddTodo={addNewTodo}></TodoInput>
      <ol className='to-do-list'>
        {todoArray.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            checked={todo.checked}
          />
        ))}
      </ol>
    </>
  )
}

export default TodoList