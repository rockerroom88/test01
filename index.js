// index.js

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

const port = 3000;
app.listen(port, function () {
    console.log('server on! http://localhost:'+port);
});