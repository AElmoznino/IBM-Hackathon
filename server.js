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

mongoose.connect(process.env.MONGOLAB_ROSE_URI || 'mongodb://localhost/fanco-db');

app.use(favicon(path.join(__dirname, 'public', 'img/favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

let Sale = require('./models/salesModel');
let Price = require('./models/pricingModel');

app.get('/getSales', (req, res, next) => {
  Sale.find((err, sales) => {
    if (err) return next(err);

    res.send(sales);
  });
});

app.get('/getPrices', (req, res, next) => {
  Price.find((err, prices) => {
    if (err) return next(err);
    
    res.send(prices);
  });
});

app.listen(port);
