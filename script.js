document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            listItem.appendChild(taskSpan);

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', function () {
                editTask(listItem, taskSpan);
            });
            listItem.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                deleteTask(listItem);
            });
            listItem.appendChild(deleteButton);

            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    }

    function editTask(listItem, taskSpan) {
        const newTaskText = prompt('Edit task:', taskSpan.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskSpan.textContent = newTaskText.trim();
        }
    }

    function deleteTask(listItem) {
        taskList.removeChild(listItem);
    }
});
