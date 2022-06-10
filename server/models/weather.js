  const request = require('request-promise');
  const Cities = require('./cities');
//var request =require('request');

//var axios = require('axios');
  const API_KEY = `d65049b43ed32925bafb9a742e805cfc`;
 require('dotenv').config();

   
  
  class Weather  extends Cities {
    static retrieveByCity (city, callback) {
      request({
        uri:   `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d65049b43ed32925bafb9a742e805cfc`,
        data: { id: city },
       json: true,
       
       
     }).then((res)=> {
          //console.log(callback);    
       callback(res);
       // console.log(callback);
     }).catch((err) => {
        console.log(err);
        callback({ error: 'Could not reach OpenWeatherMap API.' });
      });
    }
  }
//  //
  module.exports = Weather;

 //`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=d65049b43ed32925bafb9a742e805cfc`,
       //`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,