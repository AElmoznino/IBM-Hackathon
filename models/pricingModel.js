"use strict"
const fs = require('fs'),
      mongoose = require('mongoose'),
      Converter = require('csvtojson').Converter,
      converter = new Converter({
        ignoreEmpty: true
      });

// creating schema for price file
let PriceSchema = new mongoose.Schema({
  Product: String,
  SKU: String,
  Chanel: String,
  'Revenue Per Unit Sold ($)': {type: Number, default: 0}
});

// func to covert file from csv to json
PriceSchema.methods.convertToJson = (file) => {
  // promise to handle data from file
  // return new Promise( (resolve, reject) => {
    converter.on("end_parsed", (jsonData) => {
      // handling res / rej
      if(!jsonData) {
        reject("CSV to JSON conversion failed!")
      }
      resolve(jsonData);
    });
    // using fs to read a file and process using converter
    fs.createReadStream(file).pipe(converter);
  // });
};

let Price = mongoose.model('Price', PriceSchema);

module.exports = Price;
