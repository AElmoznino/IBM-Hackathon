"use strict"
const fs = require('fs'),
      mongoose = require('mongoose'),
      Converter = require('csvtojson').Converter,
      converter = new Converter({ignoreEmpty: true});

let PriceSchema = new mongoose.Schema({
  Product: String,
  SKU: String,
  Chanel: String,
  'Revenue Per Unit Sold ($)': {type: Number, default: 0}
});

let Price = mongoose.model('Price', PriceSchema);

const convertToJson = function(file) {
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

convertToJson('./data/fanco-pricing.csv')
  // handle the successful data conversion
  .then( (data) => {
    mongoose.connection.db.listCollections({name: 'prices'})
    .next(function(err, collinfo) {
        if (collinfo) {
          // The collection exists
          console.log('exists');
          Price.collection.updateMany(data);
        } else {
          Price.collection.insertMany(data);
        }
    });
  })
  // handle a rejected promise
  .then( null, console.log );

module.exports = Price;
