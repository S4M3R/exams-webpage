var mysql = require('mysql');
var con = require('./connect.js')

var getUserByID = (id, callback) =>{
  con.query(`SELECT * FROM User WHERE ID = ${id};`, function (err, selectResult) {
    if (err) throw err;
    callback(selectResult)
  });
}


module.exports = {
  getUserByID
}
