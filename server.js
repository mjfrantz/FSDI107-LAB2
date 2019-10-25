var http = require('http');
var express = require('express');

var app = express(); //create an express app

app.get('/', (req, res) => {
    res.send('This is the root page');
});

app.get('/contact', (req, res) => {
    res.send("This is the contact page");
});

app.get('/about', (req, res) => {
    res.send("Hello My Name is Michael Frantz");
});

app.listen(8080, function () {
    console.log('Server listening on http://localhost:8080');
});