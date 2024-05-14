const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola mundo!');
});

app.listen(port, () => {
  console.log(`El servidor se está ejecutando en puerto->: ${port}`);
});
