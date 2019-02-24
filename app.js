const CONFIG = require('./config/config.js')
require('./db/connect.js')

var express= require('express')
var app = express()
var bodyParser = require('body-parser')

var rApi = require('./routes/api.js')

app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({
    extended: false
}))

// Routes
app.use('/static', express.static('static'))
app.use('/css', express.static('css'))
app.use('/api', rApi)

app.get('/', (req,res) => {
  res.render('home')
})



app.listen(CONFIG.WEB_PORT, () => {
  console.log('Running on '+CONFIG.WEB_PORT)
})
