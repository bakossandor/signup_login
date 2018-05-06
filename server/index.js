const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'Hello World'
    })
})

app.post('/signup', (req, res) => {
    res.send(req.body)
})

app.post('/login', (req, res) => {
    res.send(req.body)
})

app.listen(process.env.PORT || 5000)