function addTask() {
    const input = document.getElementById("todoInput");
    const task = input.value.trim();
    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
        li.onclick = () => li.remove();
        document.getElementById("todoList").appendChild(li);
        input.value = "";
        saveTasks();
    }
}

function saveTasks() {
    const tasks = [...document.querySelectorAll("#todoList li")].map(li => li.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        li.onclick = () => { li.remove(); saveTasks(); };
        list.appendChild(li);
    });
}

const ctx = document.getElementById('attendanceChart').getContext('2d');
const attendanceChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Present', 'Absent'],
        datasets: [{
            data: [85, 15],
            backgroundColor: ['#4caf50', '#f44336']
        }]
    },
    options: {
        responsive: true
    }
});

const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Push yourself, because no one else is going to do it for you.",
    "Dream it. Wish it. Do it.",
    "The harder you work for something, the greater you’ll feel when you achieve it."
];

document.getElementById("quoteText").innerText = quotes[Math.floor(Math.random() * quotes.length)];

const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
};

window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
    loadTasks();
};