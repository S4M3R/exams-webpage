var express = require('express');
var router = express.Router();

const SUBJECTS = require('../db/subject.js')

router.get('/:id',(req,res) => {
  SUBJECTS.getSubjectByID(parseInt(req.params.id), (subjects, err) => {
    if(err){
      res.send(err)
    }
    res.render('subject',{subjects})
  })
})


module.exports = router;
