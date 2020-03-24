const express = require('express')
const app = express()
const port = 3000
const bookRoute = require('./routes/bookRoute')
app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static('public'))


app.get('/', (req, res) => res.render('index'))
app.use('/books', bookRoute)


app.listen(port, () => console.log(`BookStore listening on port ${port}!`))