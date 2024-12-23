import { useState } from "react";
import "./TodoInput.css";

function TodoInput({ onAddTodo }) {
  const [inputText, setInputText] = useState("");

  // This handles form sumbmission
  const handleClick = () => {
    onAddTodo(inputText);
    setInputText("");
  };

  return (
    <div className="to-do-bar">
      {/* on changing of an input, we change inputText to that of the inputbox */}
      <input
        className="input-bar"
        placeholder="Enter To-Do"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      ></input>

      <button className="create-to-do-button" onClick={handleClick}>
        Create To-Do
      </button>
    </div>
  );
}

export default TodoInput;
