"use strict"
const fs = require('fs'),
      mongoose = require('mongoose'),
      generator = require('mongoose-gen'),
      Converter = require('csvtojson').Converter,
      converter = new Converter({ignoreEmpty: true}),
      assert = require('assert');

// load json
const data;

converter.fromFile('../data/fanco-sales.csv', (err, result) => {
  if (err) return next(err);

  data = result;
});

// Generate the Schema object.
let BookSchema = new mongoose.Schema(generator.convert(data));

// Connect to mongodb and bind the book model.
mongoose.connect('mongodb://localhost/fanco-db');
let SaleModel = mongoose.model('Book', BookSchema);

SaleModel.collection.insertMany(data, (err) => {
  assert.equal(null, err);

  db.close();
});

module.exports = SaleModel;
