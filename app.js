let newTask = document.querySelector(".new-task");
let form = document.querySelector("form");
let incompleteUl = document.querySelector(".incomplete-task ul");
let completeUl = document.querySelector(".complete-task ul");

let createTask = function(task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    checkBox.type = 'checkbox';
    label.innerText = task;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function() {
    let listItem = createTask(newTask.value);

    incompleteUl.appendChild(listItem);
    newTask.value = " ";
    bindInCompleteTask(listItem, completeTask);
}

let completeTask = function() {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = 'delete-btn';

    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();

    completeUl.appendChild(listItem);
    bindCompleteTask(listItem, deleteBtnClick);
}

let bindInCompleteTask = function(taskItem, checkBoxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkBoxClick;
}

let deleteBtnClick = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindCompleteTask = function(taskItem, deleteButtonClick) {
    let listItem = taskItem.querySelector(".delete-btn");
    listItem.onclick = deleteButtonClick;
}
form.addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
});