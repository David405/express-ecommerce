var express = require('express');

var indexRouter = require('../controllers/index');
var usersRouter = require('../controllers/users');

var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;