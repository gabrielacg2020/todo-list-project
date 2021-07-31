const todoList = returnTodo();

todoList.forEach(function(todo){
    const li= document.createElement('li')

    document.querySelector('#bullet-list').appendChild(li).textContent = todo;
});