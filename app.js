const CONFIG = require('./config/config.js')
require('./db/connect.js')

const EXPRESS = require('express')
var app = EXPRESS()

app.set('view engine', 'pug')
app.use('/static', EXPRESS.static('static'))

app.get('/', (req,res) => {
  res.render('home')
})



app.listen(CONFIG.PORT)
