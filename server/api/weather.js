 var express = require('express');
 var Weather = require('../models/weather');
 //var Cities = require('../models/cities');


 var router = express.Router();

 router.get('/:city', function(req, res)  {

    
   
   //console.log(city);
  // router.route('/:city').get(function (req, res) {
    //var city = req.params.city;
    //city.find({}, function (err, result) {
       // res.status(200).send({ result });
    //})
//});




   Weather.retrieveByCity(city, function(err, weather)  {
     if (err) 
      return res.json(err);
    return res.json(weather);
   });
   //var city = req.params.city;
 });

 module.exports = router;