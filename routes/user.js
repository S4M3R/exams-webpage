var express = require('express');
var router = express.Router();

const USERS = require('../db/user.js')

router.get('/last', (req,res) => {
  USERS.getLastUsers(10,(users,err) => {
    if(err){
      res.send(err)
    }
    res.render('listUsers',{users})
  })
})
router.get('/:id',(req,res) => {
  USERS.getUserByID(parseInt(req.params.id), (user, err) => {
    if(err){
      res.send(err)
    }
    res.render('user',{user})
  })
})



module.exports = router;
