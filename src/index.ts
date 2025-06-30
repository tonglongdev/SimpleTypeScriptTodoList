// INTERFACE
interface Todo {
    text: string;
    isChecked: boolean;
}

// GET ELEMENTS
const input = document.getElementById("inputExp")! as HTMLInputElement;
const form = document.querySelector("#formExp")! as HTMLFormElement;
const list = document.querySelector("#listExp")! as HTMLUListElement;

// VARIABLES
const todoList: Todo[] = [];

// LOGIC
form.addEventListener("submit", function (event): void {
    event.preventDefault();
    const todo: Todo = {
        text: input.value.trim() || "Sample",
        isChecked: false,
    };
    todoList.push(todo);
    createTodo(todo, todoList.length - 1)
    input.value = "";
    console.log(todoList);
})

function createTodo(todo: Todo, index: number): void {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    li.textContent = todo.text;
    li.appendChild(checkbox);

    checkbox.addEventListener("change", function () {
        todoList[index].isChecked = checkbox.checked;
        li.style.textDecoration = checkbox.checked ? "line-through" : "none";
    })
    
    list.append(li);
}