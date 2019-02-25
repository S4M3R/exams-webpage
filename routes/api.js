var express = require('express');
var router = express.Router();

const USERS = require('../db/user.js')

router.get('/user/:id',(req,res) => {
  USERS.getUserByID(parseInt(req.params.id), (user, err) => {
    if(err){
      res.send(err)
    }
    res.send(user)
  })
})

router.get('/ranks',(req,res) => {
  USERS.getRanks((ranks, err) => {
    if(err){
      res.send(err)
    }
    res.send(ranks)
  })
})

module.exports = router;
