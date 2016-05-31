"use strict";
const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const bodyParser = require('body-parser');
const Converter = require('csvtojson').Converter;
const converter = new Converter({ignoreEmpty: true});
const port = process.env.PORT || '8080';

const app = express();


app.use(favicon(path.join(__dirname, 'public', 'img/favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'data')));

// routes to data that converts from csv to json
app.get('/fanco-sales', function (req, res, next) {
  converter.fromFile('./data/fanco-sales.csv', function (err, result) {
    if (err) return next(err);

    res.send(result);
  });
});

app.get('/fanco-pricing', (req, res, next) => {
  converter.fromFile('./data/fanco-pricing.csv', (err, result) => {
    if (err) return next(err);

    res.send(result);
  });
});

app.listen(port);
