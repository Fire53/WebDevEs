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

    

}();