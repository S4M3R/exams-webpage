var express = require('express');
var router = express.Router();

const USERS = require('../db/user.js')

router.get('/user/:id',(req,res) => {
  USERS.getUserByID(parseInt(req.params.id), (user, err) => {
    res.send(user)
  })
})

module.exports = router;
