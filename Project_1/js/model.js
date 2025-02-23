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

    function toggleTask(id) { //Segno o tolgo completamento
        let tasks = getTasks();
        tasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        saveTasks(tasks);
    }
    return {
        getTasks,
        addTask,
        removeTask,
        toggleTask
    };

})();