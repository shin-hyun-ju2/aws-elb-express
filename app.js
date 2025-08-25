const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send(`Hello World!`);
})

app.get('/health', (req, res) => {
  res.status(200).send(`Server is healthy!`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
