const express = require('express');
const app = express();
const router = require('../routes/routes');
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../pages')));
app.use(express.static(path.resolve(__dirname, '../styles')));
app.use(router);
app.listen(3000, () => console.log('HTTP server listen 3000 port...'));