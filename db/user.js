var mysql = require('mysql');
var con = require('./connect.js')

var getUserByID = (id, callback) =>{
  con.query(`SELECT * FROM user u JOIN rank r ON u.rank = r.name WHERE ID = ${id};`, function (err, selectResult) {
    callback(selectResult, err)
  });
}

var getUsersByCountry = (country, callback) =>{
  con.query(`SELECT * FROM User WHERE Country = ${country};`, function (err, selectResult) {
    callback(selectResult, err)
  });
}

var getRanks = (callback) => {
  con.query(`SELECT * FROM rank;`, function (err,selectResult) {
    callback(selectResult,err)
  })
}

module.exports = {
  getUserByID,
  getRanks
}
