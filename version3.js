var todoList = {
    todos: ["item 1", "item 2", "item 3"],
    displayTodos: function() {
        console.log("My todo's are", this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newvalue) {
        this.todos[position] = newvalue;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    }
};

//todoList.displayTodos();
//todoList.addTodo("Nick2");
//todoList.changeTodo(3, "Nick99");
todoList.deleteTodo(1);

