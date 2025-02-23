const TaskView = function () {
    const app = document.getElementById('taskApp');

    function init(){
        app.innerHTML = `
            <div class="mb-3">
                <input type="text" id="taskInput" class="form-control" placeholder="Aggiungi una nuova task">
            </div>
            <button id="addTaskBtn" class="btn btn-primary mb-3">Aggiungi</button>
            <ul id="taskList" class="list-group"></ul>
        `;
    }

    function renderTasks(tasks) {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                <div>
                    <input type="checkbox" class="form-check-input me-2" ${task.completed ? 'checked' : ''} data-id="${task.id}">
                    <span ${task.completed ? 'style="text-decoration: line-through;"' : ''}>${task.title}</span>
                </div>
                <button class="btn btn-danger btn-sm delete-btn" data-id="${task.id}">Elimina</button>
            `;
            taskList.appendChild(li);
        });
    }

    function getTaskInput() {
        return document.getElementById('taskInput').value;
    }

    function clearTaskInput() {
        document.getElementById('taskInput').value = '';
    }

    function bindAddTask(handler) {
        document.getElementById('addTaskBtn').addEventListener('click', handler);
        document.getElementById('taskInput').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') handler();
        });
    }
    
}();