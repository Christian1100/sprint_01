const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Meine erste App! Hier soll später die Quiz-App enstehen.')
})

app.listen(port, () => {
  console.log('Server lauscht...')
})

app.use(express.static('public'))
