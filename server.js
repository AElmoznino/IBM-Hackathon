"use strict";
const express = require('express'),
      mongoose = require('mongoose'),
      favicon = require('serve-favicon'),
      path = require('path'),
      bodyParser = require('body-parser'),
      Converter = require('csvtojson').Converter,
      converter = new Converter({ignoreEmpty: true}),
      port = process.env.PORT || '8080';

const app = express();

mongoose.connect(process.env.MONGOLAB_IVORY_URI || 'mongodb://localhost/fanco-db');

app.use(favicon(path.join(__dirname, 'public', 'img/favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

const Sale = require('../models/salesModel');

app.get('/', (req, res, next) => {
  Sale.find((err, sales) => {
    if (err) return next(err);

    res.send(sales);
  });
});


// routes to data that converts from csv to json
// app.get('/fanco-sales', function (req, res, next) {
//   converter.fromFile('./data/fanco-sales.csv', function (err, result) {
//     if (err) return next(err);
//
//     res.send(result);
//   });
// });
//
// app.get('/fanco-pricing', (req, res, next) => {
//   converter.fromFile('./data/fanco-pricing.csv', (err, result) => {
//     if (err) return next(err);
//
//     res.send(result);
//   });
// });

app.listen(port);
