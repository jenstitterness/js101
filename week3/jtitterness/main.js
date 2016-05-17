var addButton = document.getElementById('addTodoButton'),
    todoTextarea = document.getElementById('newTodoInput'),
    todoUL = document.getElementById('list');

var todoList = [];

var renderList = function() {

    for (var i = 0; i < todoList.length; i++) {
        var listItem = document.createElement('li');
        listItem.innerText = todoList[i].text + " created at: " + todoList[i].createdAt.toLocaleString();
        todoUL.appendChild(listItem);
    }

};

addButton.addEventListener('click', function(e) {
    var todo = {
        createdAt: new Date(),
        text: todoTextarea.value
    };
    todoList.push(todo);
    todoTextarea.value = "";

    todoUL.innerHTML = '';

    renderList();
});
