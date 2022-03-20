const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");

const TODOS_KEY = "todos";
let todos = [];

//[1,2,3,4].filter(item => item > 2)
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo)=> todo.id !== parseInt(li.id));
    saveTodos();
}

// todo button click event: removing todo by click
function ButtonClickEvent(event){
    event.preventDefault();
    const li = event.target.parentElement;
    li.remove();
    deleteToDo(event);
}

// save todos to localStorage
function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
// get todos from localStorage
const savedTodos = localStorage.getItem(TODOS_KEY);

// paint todos
function paintTodo(newTodo){
    // create <li> <span> tags for a todo
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    // create <button> tags for todos
    const button =document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click",ButtonClickEvent); // attach event function to the button

    // add the tags to html(?)
    li.appendChild(span);
    todoList.appendChild(li);
    li.appendChild(button);
}

// paint saved todos 
if(savedTodos != null){
    const parsedToDos = JSON.parse(savedTodos);
    todos = parsedToDos;
    parsedToDos.forEach(element => {
        paintTodo(element);
    });
}

// submit event : get todo
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;  //todoInput is <Input> object
    todoInput.value =""; // reset todoInput
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    todos.push(newTodoObj); // add todo to todos[]
    paintTodo(newTodoObj); //paint todo
    saveTodos();
}
todoForm.addEventListener("submit",handleToDoSubmit);













