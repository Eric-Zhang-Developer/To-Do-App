const createToDo = document.getElementById('create-to-do');
const toDoList = document.getElementById('to-do-list');

createToDo.addEventListener('click', newToDo);
document.addEventListener('keydown', function(event) {
  if(event.key === "Enter"){
    newToDo();
  }
});

// Create a new To-Do
function newToDo(){
  let toDoInput = document.getElementById('input-bar');
  const toDoText = toDoInput.value;
  if (toDoText === ""){ // Edge case check for empty to-do
    console.log("Error: Empty To-Do");
    return;
  }
  // Create a new to-do and append it to the to do list 
  // We will create 3 sub elements: Checkbox, textbox, and delete button
  const toDoContainer = document.createElement('li');
  const toDoTextBox = document.createElement('p');
  const toDoCheckBox = document.createElement('input');
  const toDoDeleteButton = document.createElement('button');
  //

  toDoContainer.setAttribute('class', 'to-do');
  toDoTextBox.textContent = toDoText;



  toDoContainer.appendChild(toDoCheckBox);
  toDoContainer.appendChild(toDoTextBox);
  toDoContainer.appendChild(toDoDeleteButton);
  toDoList.appendChild(toDoContainer);
  
  // Reset Search Bar
  toDoInput.value = "";
}