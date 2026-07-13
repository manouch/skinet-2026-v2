"use strict";
let message = 'Hello';
let isComplete = false;
let todos = [];
function addTodo(title) {
    const newTodo = {
        id: todos.length + 1,
        title,
        completed: false,
    };
    todos.push(newTodo);
    return newTodo;
}
function toggleTodo(id) {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
}
addTodo('Build API');
addTodo('Publish app');
addTodo(1);
toggleTodo(1);
console.log(todos);
