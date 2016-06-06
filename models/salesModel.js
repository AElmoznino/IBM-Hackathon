"use strict"
const fs = require('fs'),
      mongoose = require('mongoose'),
      Converter = require('csvtojson').Converter,
      converter = new Converter({ignoreEmpty: true});

let SaleSchema = new mongoose.Schema({
  'Week Of': String,
  City: String,
  Neighborhood: String,
  Product: String,
  SKU: String,
  Chanel: String,
  'Sales (Units)': {type: Number, default: 0}
});

SaleSchema.methods.convertToJson = (file) => {
  return new Promise( (resolve, reject) => {
    converter.on("end_parsed", (jsonData) => {
      if(!jsonData) {
        reject("CSV to JSON conversion failed!")
      }
      resolve(jsonData);
    });
    fs.createReadStream(file).pipe(converter);
  });
};

let Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;
