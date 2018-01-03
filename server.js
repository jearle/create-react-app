const express = require('express');
const app = express();

app
  .use((req, res, next) => {
    res.set({
      'access-control-allow-origin': '*',
    });

    next();
  })
  .get('/', (req, res) => {
    res.send({
      key: 'value',
    });
  });

app.listen(3002, () => 
  console.log('listening on http://localhost:3002'));