document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    // Function to create a new task element
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-btn">&times;</button>
        `;
        li.querySelector('button').addEventListener('click', () => {
            li.remove();
        });

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        return li;
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }
    }

    // Add task on button click
    addTaskButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
