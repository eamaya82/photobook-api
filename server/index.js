const express = require('express');

const api = require('./api/v1/');

const app = express();

app.use('/api/v1', api);
app.use('/api', api);

app.use((req, res, next) => {
  res.status(404);
  res.json({
    message: 'Not found',
  });
});

app.use((err, req, res, next) => {
  res.status(500);
  res.json({
    message: err.message,
  });
});

module.exports = app;
