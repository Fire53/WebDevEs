const TaskModel = (function () {
    const STORAGE_KEY = 'tasks';

    function getTasks() { //Ottengo tasks salvate (altrimenti [] vuoto)
        const tasks = localStorage.getItem(STORAGE_KEY);
        return tasks ? JSON.parse(tasks) : [];
    }

    function saveTasks(tasks) { //Salvo tasks
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }

    function addTask(task) { //Aggiungo task
        const tasks = getTasks();
        tasks.push(task);
        saveTasks(tasks);
    }

    function removeTask(id) { //Rimuovo task
        let tasks = getTasks();
        tasks = tasks.filter(task => task.id !== id);
        saveTasks(tasks);
    }

    return {
        getTasks,
        addTask,
        removeTask
    };

})();