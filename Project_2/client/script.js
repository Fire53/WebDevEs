async function fetchData(url, listId) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const list = document.getElementById(listId);
      data.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = JSON.stringify(item);
        list.appendChild(li);
      });
    } catch (error) {
      console.error('Errore nel recuperare dati da ' + url, error);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    fetchData('http://localhost:3001/users', 'usersList');
    fetchData('http://localhost:3002/tasks', 'tasksList');
  });