const todoList = JSON.parse(localStorage.getItem('todos')) || [];

const updateTodo = () => {
  localStorage.setItem('todos', JSON.stringify(todoList));
}
// load the list of elements
const render = () => {
  console.log('load the last list');
  const todoListElement = document.getElementById('todo-list');
  const todoTemplate = todoList.map( item => '<li>' + item + '</li>');
  todoListElement.innerHTML = todoTemplate.join('');

  const todoListElements = document.querySelectorAll('#todo-list li');
  todoListElements.forEach( (element, index) => {
    element.addEventListener('click', () => {
      // console.log(todoListElements, element, index);
      // remove element from #todo-list ul
      element.parentNode.removeChild(element);
      // remove element from array
      todoList.splice(index, 1);
      // update todoList
      updateTodo();
      // paint the list
      render();
    });
  });
}

window.onload = () => {
  console.log('ToDo List!');
  render();

  const form = document.getElementById('todo-form');

  form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById('todo');
    const todoText = todo.value;
    
    todo.value = '';

    todoList.push(todoText);
    // save to localStorage
    updateTodo();

    console.log('valor digitado', todoText);
    console.log('valor actual lista', todoList);
    
    render();
  }   
}
