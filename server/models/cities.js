 const db = require('../database');

 class Cities {
  static retrieveAll (callback) {
     db.query(`SELECT city_name from cities`,(err, res) => {
      if (err.error)
        return callback(err);
      //  console.log(res);
      callback(res);
      //console.log(callback());  
     });
   }

   static insert (city, callback) {
     db.query(`INSERT INTO cities (city_name) VALUES ($1)`, [city],(err, res) => {
      if (err.error)
      //console.log(err);
        return callback(err);
       callback(res);
     });  
   }
 }       

 module.exports = Cities;
