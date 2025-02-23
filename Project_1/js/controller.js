const TaskController = (function (model, view) {
    function init() {
        view.init();
        view.renderTasks(model.getTasks());
        view.bindAddTask(handleAddTask);
        view.bindDeleteTask(handleDeleteTask);
        view.bindToggleTask(handleToggleTask);
    }

    function handleAddTask() {
        const taskTitle = view.getTaskInput().trim();
        if (taskTitle === '') return;
        const task = {
            id: Date.now().toString(),
            title: taskTitle,
            completed: false
        };
        model.addTask(task);
        view.clearTaskInput();
        view.renderTasks(model.getTasks());
    }

    function handleDeleteTask(id) {
        model.removeTask(id);
        view.renderTasks(model.getTasks());
    }

    function handleToggleTask(id) {
        model.toggleTask(id);
        view.renderTasks(model.getTasks());
    }

    return{
        init
    };

})(TaskModel, TaskView);