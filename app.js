const EXPRESS = require('express')
const PORT = 2000;
var app = EXPRESS()

app.set('view engine', 'pug')
app.use('/static', EXPRESS.static('static'))

app.get('/', (req,res) => {
  res.render('home')
})



app.listen(PORT)
