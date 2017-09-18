import express from 'express';
import path from 'path';

import React from './modules/render.jsx';

var app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/api/items', function (req, res, next) {
  res.json([
    {"id": 1, "text": "first"},
    {"id": 2, "text": "second"},
    {"id": 3, "text": "third"}
  ]);
});

// for server side rendering
app.get('*', function (req, res, next) {
  React(req, res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
