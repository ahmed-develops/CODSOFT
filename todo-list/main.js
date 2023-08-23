let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    // console.log("success");
    msg.innerHTML = "";
    if (selectedTaskId === null) {
      // If selectedTaskId is null, it's a new task
      acceptData();
    } else {
      // If selectedTaskId is not null, it's an edit
      updateData(selectedTaskId);
    }
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();
  }
};

let data = [];

let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
  createTasks();
};

let updateData = (taskId) => {
  data[taskId] = {
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  };

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
  createTasks();
};

let selectedTaskId = null;

let createTasks = () => {
  tasks.innerHTML = "";
  data.map((x, y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
          <span class="fw-bold">${x.text}</span>
          <span class="small text-secondary">${x.date}</span>
          <p>${x.description}</p>
  
          <span class="options">
            <i onClick= "editTask(this, ${y})" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(${y})" class="fas fa-trash"></i>
          </span>
        </div>
    `);
  });
  tasks.style.maxHeight = "400px"; 
  tasks.style.overflowY = "auto";
  resetForm();
};

let deleteTask = (taskId) => {
  data.splice(taskId, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
  createTasks();
};

let editTask = (e, taskId) => {
  selectedTaskId = taskId; // Set the selectedTaskId to the task being edited
  let selectedTask = data[taskId];

  textInput.value = selectedTask.text;
  dateInput.value = selectedTask.date;
  textarea.value = selectedTask.description;
};

let resetForm = () => {
  selectedTaskId = null; // Reset the selectedTaskId when closing the form
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

(() => {
  data = JSON.parse(localStorage.getItem("data")) || []
  console.log(data);
  createTasks();
})();

