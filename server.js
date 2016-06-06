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
    console.log(sales.length);
    if (err) {
      return next(err);
    } else if (sales.length === 0) {
      //checking if collection exists
      let sale = new Sale();
      sale.convertToJson('data/fanco-sales.csv')
        // handle the successful data conversion
        // receiving data from file and handling it
        .then((data) => {
          Sale.collection.insertMany(data);
          console.log(Sale.collection);
      });
    } else {
      res.send(sales);
    }
  });
});

app.get('/getPrices', (req, res, next) => {
  Price.find((err, prices) => {
    if (err) {
      return next(err);
    } else if (prices.length === 0) {
      // call a func to convert data from external to db
      let price = new Price();
      price.convertToJson('data/fanco-pricing.csv')
        // handle the successful data conversion
        // receiving data from file and handling it
      .then((data) => {
        //checking if collection exists
        mongoose.connection.db.listCollections({name: 'prices'})
        // calling middleware next
        .next((err, collinfo) => {
          if (collinfo) {
            console.log('exists');
          } else {
            // if null insert data
            Price.collection.insertMany(data);
          }
        });
      });
    } else {
      res.send(prices);
    }

  });
});

app.listen(port);
