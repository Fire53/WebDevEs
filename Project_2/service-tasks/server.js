const express = require('express');
const app = express();
const PORT = 3002;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/tasks', (req, res) => {
    res.json([
        { id: 1, title: 'Task1', compelted: false },
        { id: 2, title: 'Task2', compelted: true },
    ]);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});