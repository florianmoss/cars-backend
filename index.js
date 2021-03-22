const express = require('express')
const app = express()

const port = process.env.PORT || 8080
const db = require('./queries')

app.get('/', (req, res) => {
  res.send('Hi, this is the Cars Backend')
})

app.get('/cars', db.getCars)

app.listen(port);