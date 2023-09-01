var TodoStatus;
(function (TodoStatus) {
    TodoStatus["InProgress"] = "in-progress";
    TodoStatus["Todo"] = "todo";
})(TodoStatus || (TodoStatus = {}));
const todoItems = [
    {
        id: 1,
        title: "Learn HTML",
        status: TodoStatus.InProgress,
        completedOn: new Date("2021-09-11"),
        seats: 2,
    },
    { id: 2, title: "Learn TypeScript", status: TodoStatus.InProgress, seats: 2 },
    {
        id: 3,
        title: "Write the best app in the world",
        status: TodoStatus.Todo,
        seats: 2,
    },
];
function addTodoItem(todo) {
    const id = getNextId(todoItems);
    const newTodo = {
        id,
        title: todo,
        status: TodoStatus.Todo,
        seats: 2,
    };
    todoItems.push(newTodo);
    return newTodo;
}
function getNextId(items) {
    return items.reduce((max, x) => (x.seats > max ? x.seats : max), 0) + 1;
}
const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app");
console.log(JSON.stringify(newTodo));
