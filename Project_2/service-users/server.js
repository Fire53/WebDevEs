const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'Alice Bianchi' },
        { id: 2, name: 'Bob Marley' },
    ]);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});