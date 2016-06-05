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

    let sale = new Sale();
    sale.convertToJson('data/fanco-sales.csv')
      // handle the successful data conversion
      // receiving data from file and handling it
      .then((data) => {
        //checking if collection exists
        mongoose.connection.db.listCollections({name: 'sales'})
        // calling middleware next
        .next((err, collinfo) => {
          if (collinfo) {
            if (sales.length !== Object.keys(data).length) {
              let collDate = {};

              sales.map((val) => {
                collDate[val['Week Of']] = true;
              });

              data.map((val) => {
                for (var key in collDate) {
                  if (key !== val['Week Of']) {
                    // if differents between file and collection
                    Sale.collection.insertOne(val);
                  }
                }
              });
            }
          } else {
            // if null insert data
            Sale.collection.insertMany(data);
          }
      });
    });
    // console.log(sales);
    res.send(sales);
  });
});

app.get('/getPrices', (req, res, next) => {
  Price.find((err, prices) => {
    if (err) return next(err);

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
            if (prices.length !== Object.keys(data).length) {
              let collDate = {};

              prices.map((val) => {
                collDate[val['SKU']] = true;
              });

              data.map((val) => {
                for (var key in collDate) {
                  if (key !== val['SKU']) {
                    // if differents between file and collection
                    Price.collection.insertOne(val);
                  }
                }
              });
            }
          } else {
            // if null insert data
            Price.collection.insertMany(data);
          }
      });
    });
    res.send(prices);
  });
});

app.listen(port);
