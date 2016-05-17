$(document).ready(function() {

    var addButton = $('#addTodoButton'),
        todoTextarea = $('#newTodoInput'),
        todoUL = $('#list');

    var todoList = [];

    var renderList = function() {

        $(todoList).each(function(index, todo) {
            var listItem = $('<li></li>');//document.createElement('li');
            listItem.text( todo.text + " created at: " + todo.createdAt.toLocaleString() ) ;
            todoUL.append(listItem);
        });
    };

    addButton.on('click', function(e) {
        var todo = {
            createdAt: new Date(),
            text: todoTextarea.val()
        };
        
        todoList.push(todo);
        todoTextarea.val("");

        todoUL.empty();

        renderList();
    });
});
