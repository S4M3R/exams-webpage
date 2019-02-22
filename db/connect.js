var mysql = require('mysql');
const CONFIG = require('../config/config.js')

var con = mysql.createConnection({
  host: CONFIG.BD_HOST,
  user: CONFIG.BD_USER,
  password: CONFIG.BD_PASSWORD
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
