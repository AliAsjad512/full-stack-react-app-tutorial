 var express = require('express');
 var Cities = require('../models/cities');

 var router = express.Router();

 router.get('/', (req, res) => {
   Cities.retrieveAll(function(err, cities)  {
     if (err)
       return res.json(err);
     return res.json(cities);
   });
 });

 router.post('/', (req, res) => {
   var city = req.body.city;

   Cities.insert(city, function(err, result)  {
     if (err)
       return res.json(err);
     return res.json(result);
   });
 });

 module.exports = router;