const EXPRESS = require('express')
const PORT = 2000;
var app = EXPRESS()

app.set('view engine', 'pug')

app.get('/', (req,res) => {
  res.render('home')
})



app.listen(PORT)
