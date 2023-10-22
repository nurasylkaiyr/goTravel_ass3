function addTask() {
        var taskInput = document.getElementById("task");
        var taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
    }

        var taskList = document.getElementById("taskList");
        var taskItem = document.createElement("li");
        taskItem.className = "list-group-item";
        taskItem.innerHTML = `
            <input type="checkbox" class="mr-2" onchange="toggleTaskCompletion(this)">
            <span>${taskText}</span>
            <button class="btn btn-danger btn-sm float-right" onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = "";
}

function toggleTaskCompletion(checkbox) {
        var taskText = checkbox.nextElementSibling;
            if (checkbox.checked) {
                taskText.classList.add("completed");
            } else {
                taskText.classList.remove("completed");
            }
}

function deleteTask(button) {
        var taskItem = button.parentElement;
        taskItem.remove();
}

function startCountdown() {
    const inputDate = document.getElementById('dateInput').value;
    const targetDate = new Date(inputDate);
    const countdownElement = document.getElementById('countdown');

    setInterval(function() {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  }