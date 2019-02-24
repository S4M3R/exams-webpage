var mysql = require('mysql');
const CONFIG = require('../config/config.js')

var con = mysql.createConnection({
  host: CONFIG.DB_HOST,
  user: CONFIG.DB_USER,
  password: CONFIG.DB_PASSWORD
});

con.connect(function(err) {
    if (err) throw err;
    con.query(`use ${CONFIG.DB_DATABASE}`, function (err, useResult) {
      if (err) throw err;
      console.log(`Connected to DB on ${CONFIG.DB_DATABASE}!`);
  });
});

module.exports = con
