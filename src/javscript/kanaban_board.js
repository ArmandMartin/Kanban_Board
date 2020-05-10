// Created By Armand Martin
function createTask() {
  var article = document.getElementById("todo_article");
  var task = document.getElementById("newtask").value;
  var paragraph = document.createElement("p");
  paragraph.innerText = task;

  var newdiv = document.createElement("div");
  newdiv.classList.add("task");
  newdiv.appendChild(paragraph);
  var button = document.createElement("button");

  button.setAttribute("onclick", "startTask(this.parentNode.id)");
  button.innerHTML = "Start Task";
  button.id = new Date().getTime().toString();
  newdiv.appendChild(button);
  newdiv.id = new Date().getTime().toString();
  article.appendChild(newdiv);
}

function startTask(buttonParentId) {
  var startedDiv = document.getElementById(buttonParentId);
  startedDiv.parentNode.removeChild(startedDiv);
  var button = startedDiv.getElementsByTagName("button")[0];
  button.innerHTML = "Complete Task";
  button.setAttribute("onclick", "completeTask(this.parentNode.id)");
  startedDiv.bu
  startedDiv.id = new Date().getTime().toString();
  var article = document.getElementById("progress_article");
  article.appendChild(startedDiv);
}
function completeTask(buttonParentId) {
  var completedDiv = document.getElementById(buttonParentId);
  completedDiv.parentNode.removeChild(completedDiv);
  completedDiv.removeChild(completedDiv.getElementsByTagName("button")[0]);
  var article = document.getElementById("completed_article");
  article.appendChild(completedDiv);
}