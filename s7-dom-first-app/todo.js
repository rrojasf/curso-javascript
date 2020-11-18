const todoList = [];

window.onload = () => {
    console.log('ToDo List!');

    const form = document.getElementById('todo-form');

    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        
        todo.value = '';

        todoList.push(todoText);
        
        console.log('valor digitado', todoText);
        console.log('valor actual lista', todoList);

        const todoListElement = document.getElementById('todo-list');

        /* todoListElement.innerHTML = '';
        for(let index = 0; index < todoList.length; index++) {
            todoListElement.innerHTML += '<li>' + todoList[index] + '</li>';
        } */

        const todoTemplate = todoList.map( item => '<li>' + item + '</li>');
        todoListElement.innerHTML = todoTemplate.join('');
    }   
}
