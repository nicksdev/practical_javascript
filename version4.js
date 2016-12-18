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
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }

};

todoList.addTodo("refactor");
todoList.changeTodo(0, "updated");
todoList.toggleCompleted(0);
//todoList.completeTodo(0);
//console.log("Test1:", this.todos.completed);
