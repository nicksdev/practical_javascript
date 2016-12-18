var todoList = {
    todos: [],
    displayTodos: function() {
        console.log("My todo's are", this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, newvalue) {
        this.todos.todoText[position] = newvalue;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    }
};

displayTodos();
