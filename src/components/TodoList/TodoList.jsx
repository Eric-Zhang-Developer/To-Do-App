import './TodoList.css'
import TodoInput from './TodoInput/TodoInput'
import TodoItem from './TodoItem/TodoItem'
import { useState } from 'react'


function TodoList(){
  const [todoArray, setToDoArray] = useState([]);

  // Adds new To Do
  const addNewTodo = (text) =>{
    const newTodo = {
      id: Date.now(),
      text: text,
      checked: false
    }
    setToDoArray([...todoArray, newTodo]);
  }

  // Returns a new array with the element with the check being switched
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

  const deleteToDo = (id) =>{
    setToDoArray(todoArray.filter(todo => todo.id != id));
  }

  // Crete the input along with a todoItem for each todo in the array
  return(
    <>
      <TodoInput onAddTodo={addNewTodo}></TodoInput>
      <ol className='to-do-list'>
        {todoArray.map((todo) => (
          <TodoItem
            onSetCheckedStatus={toggleChecked}
            onDeleteToDo={deleteToDo}
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