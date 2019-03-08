var mysql = require('mysql');
var con = require('./connect.js')

  var getSubjectByID = (id,callback) => {
    con.query(`SELECT s.*, u.username, u.profile_img FROM subjects s JOIN users u ON s.creator_id = u.id WHERE s.id = ${id};`,function (err,selectResult){
      callback(selectResult,err)
    })
  }


module.exports = {
  getSubjectByID
}
