const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  req.send('hello world');
});

app.listen(port, () => {
  console.log( `running ${port}`);
});
