const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/coins');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', 'Content-Type, Authorization');
    next();
});

app.use('/', feedRoutes);

app.listen(8080);