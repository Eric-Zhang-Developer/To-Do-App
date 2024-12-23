import './TodoItem.css'

function TodoItem({text, checked}){
  return(
    <li className='to-do-container'>
      <input className='to-do-check-box' type='checkbox'></input>
      <p className='to-do-text-box'>{text}</p>
      <button className='to-do-delete-button'>×</button>
    </li>
  )
}

export default TodoItem