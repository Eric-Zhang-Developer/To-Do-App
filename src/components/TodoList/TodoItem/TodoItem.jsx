import "./TodoItem.css";

function TodoItem({ text, checked, id, onSetCheckedStatus, onDeleteToDo }) {
  
  
  return (
    <li className={`to-do-container ${checked && 'checked'}`}>
      <input
        className="to-do-check-box"
        type="checkbox"
        onChange={() => onSetCheckedStatus(id)}
      ></input>
      <p className="to-do-text-box">{text}</p>
      <button className="to-do-delete-button" onClick={() => onDeleteToDo(id)}>×</button>
    </li>
  );
}

export default TodoItem;
