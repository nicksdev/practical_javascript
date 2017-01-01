var todoList = {
    todos: [],
    /* displayTodos: function() {
        if (this.todos.length === 0) {
            console.log("You have NOTHING to do today - go home!");
        } else {
            console.log("My todo's are");
            for (var i = 0; i < this.todos.length; i++){
                if (this.todos[i].completed === false){
                    console.log("( )", this.todos[i].todoText);
                } else {
                    console.log("(X)", this.todos[i].todoText);
                }
            }
        }
    },*/


    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });

    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // Get number of completed todos

        for (var i = 0; i < totalTodos; i++){
            if (this.todos[i].completed === true){
                completedTodos++;
            }
        }

        if (completedTodos === totalTodos) {
            //make everything false.
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    }
};


var handlers = {
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();

    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber,1);
        deleteTodoPositionInput.value = "";
        view.displayTodos();

    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    }



};

var view = {
    displayTodos: function() {
        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";

        for (var i = 0; i < todoList.todos.length; i++) {

            var todoLi = document.createElement("li");
            var todo = todoList.todos[i];
            var todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = "(X) " + todo.todoText;
            } else {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};

