var mysql = require('mysql');
var con = require('./connect.js')

var getUserByID = (id, callback) =>{
  con.query(`SELECT u.id, u.username,u.name, u.surname, u.country, u.profile_img, u.description, u.github_name, u.twitter_name, u.linkedin_name, u.website, u.rank_id, r.name as rank_name, r.color FROM users u JOIN ranks r ON u.rank_id = r.id WHERE u.id = ${id};`, function (err, selectResult) {
    callback(selectResult, err)
  });
}

var getLastUsers = (cant,callback) => {
  con.query(`SELECT * FROM users ORDER BY id DESC LIMIT ${cant}`, function (err,selectResult) {
    callback(selectResult, err)
  })
}

var getUsersByCountry = (country, callback) =>{
  con.query(`SELECT * FROM users WHERE Country = ${country};`, function (err, selectResult) {
    callback(selectResult, err)
  });
}

var getRanks = (callback) => {
  con.query(`SELECT * FROM ranks;`, function (err,selectResult) {
    callback(selectResult,err)
  })
}

module.exports = {
  getUserByID,
  getRanks,
  getLastUsers
}
