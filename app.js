const CONFIG = require('./config/config.js')
require('./db/connect.js')

var express= require('express')
var app = express()

const USERS = require('./db/user.js')

app.set('view engine', 'pug')
app.use('/static', express.static('static'))
app.use('/css', express.static('css'))


app.get('/', (req,res) => {
  res.render('home')
})



app.listen(CONFIG.WEB_PORT, () => {
  console.log('Running on '+CONFIG.WEB_PORT)
})
