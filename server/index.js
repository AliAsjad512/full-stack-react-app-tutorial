const path = require('path');

const express = require('express');//we se thise for backened to set up server
 const bodyParser = require('body-parser');// data interpretation in backend and frontend


  var db  = require('./database');

  const ENV = process.env.NODE_ENV;// if we work in production or development we use those for certain changes for our backend process
  const PORT = process.env.PORT || 5000;// which port our expresss server will be working on

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({extended: false}));

  app.use(bodyParser.json());


   app.use('/api/cities', require('./api/cities'));
   app.use('/api/weather', require('./api/weather'));


  app.listen(PORT, () => {
     console.log(`Server listening on port ${PORT}!...`);

  });
   db.query('SELECT NOW()',(err, res) => {
      if(err.error)
    return console.log(err,error);
      console.log(`PostgreSQL connect: ${res[0].now}.`);
   })

module.exports = app;
