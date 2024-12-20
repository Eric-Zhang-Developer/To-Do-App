const createToDo = document.getElementById('create-to-do');
const toDoList = document.getElementById('to-do-list');
createToDo.addEventListener('click', function(){
  let toDoInput = document.getElementById('input-bar');
  const toDoText = toDoInput.value;
  if (toDoText === ""){ // Edge case check for empty to-do
    console.log("Error: Empty To-Do");
    return;
  }
  // Create a new to-do and append it to the to do list 
  const toDo = document.createElement('li');
  toDo.setAttribute('class', 'to-do');
  toDo.textContent = toDoText;
  toDoList.appendChild(toDo);
  // Reset Search Bar
  toDoInput.value = "";
});


