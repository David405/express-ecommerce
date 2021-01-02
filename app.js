var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/crud', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

module.exports = app;
