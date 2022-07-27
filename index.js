const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('welcome*!!')
})

app.get('/h', (req, res) => {
    res.send('hello')
  })

app.get('/h/i', (req, res) => {
    res.send('hiii')
  })

app.listen(port, () => {
  console.log(`moving to page`)
})