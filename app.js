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
  res.render('home', {
    list:{
      num_users: 10,
      num_institutes: 2,
      num_exams: 98,
      num_questions: 233,
      num_post: 33
    }
  })
})



app.listen(CONFIG.WEB_PORT, () => {
  console.log('Running on '+CONFIG.WEB_PORT)
})
