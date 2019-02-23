const CONFIG = require('./config/config.js')
require('./db/connect.js')

const EXPRESS = require('express')
var app = EXPRESS()

const USERS = require('./db/user.js')

app.set('view engine', 'pug')
app.use('/static', EXPRESS.static('static'))

app.get('/', (req,res) => {
  res.render('home')
})



app.listen(CONFIG.WEB_PORT, () => {
  console.log('Running on '+CONFIG.WEB_PORT)
})
