 const request = require('request-promise');
 //var request =require('request');
 let API_KEY = 'd65049b43ed32925bafb9a742e805cfc';

 require('dotenv').config();
  
 class Weather {
   static retrieveByCity (city, callback) {
     request({
       uri: //`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`
       `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=d65049b43ed32925bafb9a742e805cfc&units=imperial`,
       json: true
     }).then(function(res) {
         //console.log(callback);  
       callback(res);
      /// console.log(callback);
     }).catch(function(err)  {
       console.log(err);
       callback({ error: 'Could not reach OpenWeatherMap API.' });
     });
   }
 }
 //
 module.exports = Weather;