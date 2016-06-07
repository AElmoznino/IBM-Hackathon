"use strict";
const async = require('async'),
      CronJob = require('cron').CronJob, 
      request = require('request'),
      bodyParser = require('body-parser'),
      client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN); //require the Twilio module and create a REST client

// console.log("SID: ", process.env.TWILIO_ACCOUNT_SID);
// console.log("AUTH: ", process.env.TWILIO_AUTH_TOKEN);

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
   
var apiKey = process.env.FORECAST_API_KEY,
          lat = '42.3587',
          lon = '-71.0567',
          url = ['https://api.forecast.io/forecast/', apiKey, '/', lat, ',', lon, '?exclude=currently,minutely,hourly,flags&units=si'].join('');  

var getforecast = function (callback) {request(url, function(error, response, body){
  if (!error && response.statusCode == 200) {
    console.log("response received") 
  }
  // parses the response to JSON
  var gfparsed = JSON.parse(response.body); 
  // returning the parsed response and passing it on to Twilio
  callback(null, gfparsed)
  return gfparsed;
});
};

var sendsms = function(gfparsed, callback) {

  client.sendMessage({
        to:'+972534208007',
        from: '+972526282709',
        body: 'Weather today: ' + gfparsed.daily.data[0].summary + ' Max temperature: ' + Math.round(gfparsed.daily.data[0].temperatureMax) + '°C'
      }, function(err, responseData) { //this function is executed when a response is received from Twilio
          if (err) {
            console.log("There was an error:", err);
          }
          else { 
              console.log("Message sent!:", responseData.body); 
          }
      }); // end of client.sendMessage

};

var job = new CronJob({
      cronTime: '00 00 07 * * 1-5', 
      onTick: function() {
          async.waterfall([ 
            getforecast, sendsms                        
          ])
        }, // end of onTick 
        timeZone: 'America/New_York'
}); // end of cronJob
job.start();

// module.exports = job;