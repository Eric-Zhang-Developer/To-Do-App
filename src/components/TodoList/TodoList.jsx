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

  const toggleChecked = (id) =>{
    setToDoArray(todoArray.map(toDo => {
      if (toDo.id === id){
        const updatedTodo = {...toDo, checked: !toDo.checked};
        console.log('Todo checked status updated:', updatedTodo.checked);
        return updatedTodo;
      }
      return toDo;

    }))
  }
  return(
    <>
      <TodoInput onAddTodo={addNewTodo}></TodoInput>
      <ol className='to-do-list'>
        {todoArray.map((todo) => (
          <TodoItem
            onSetCheckedStatus={toggleChecked}
            key={todo.id}
            id = {todo.id}
            text={todo.text}
            checked={todo.checked}
          />
        ))}
      </ol>
    </>
  )
}

export default TodoList