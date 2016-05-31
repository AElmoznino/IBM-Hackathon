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

let Sale = mongoose.model('Sale', SaleSchema);

const convertToJson = function( file ) {
  return new Promise( (res, rej) => {
    converter.on("end_parsed", (jsonData) => {
      if(!jsonData) {
        rej("CSV to JSON conversion failed!")
      }
      res(jsonData);
    });
    fs.createReadStream(file).pipe(converter);
  });
};

convertToJson('./data/fanco-sales.csv')
  // handle the successful data conversion
  .then( (data) => {
    mongoose.connection.db.listCollections({name: 'sales'})
    .next(function(err, collinfo) {
        if (collinfo) {
            // The collection exists
            console.log('exists');
            Sale.collection.updateMany(data);
        } else {
          Sale.collection.insertMany(data);
        }
    });
  })
  // handle a rejected promise
  .then( null, console.log );

module.exports = Sale;
