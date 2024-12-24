import { useState } from "react";
import "./TodoInput.css";

function TodoInput({ onAddTodo }) {
  const [inputText, setInputText] = useState("");

  // This handles form sumbmission
  const handleCreateTodo = () => {
    if (!(inputText === '')){
      onAddTodo(inputText);
      setInputText("");
    }
    else{
      console.log("Error! Input Field is Blank");
    }

  };

  return (
    <div className="to-do-bar">
      {/* on changing of an input, we change inputText to that of the inputbox */}
      <input
        className="input-bar"
        placeholder="Enter To-Do"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter'){
            handleCreateTodo();
          }
        }}
      ></input>

      <button className="create-to-do-button" onClick={handleCreateTodo}>
        Create To-Do
      </button>
    </div>
  );
}

export default TodoInput;
