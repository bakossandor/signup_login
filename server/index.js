const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const bcrypt = require('bcrypt')
const MongoClient = require('mongodb').MongoClient
const saltRounds = 10

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
    // req.body.password
    bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
        res.send(hash)
    });
})
    

app.post('/login', (req, res) => {
    res.send(req.body)
})

MongoClient.connect('mongodb://localhost:27017', function (err, db) {
    if (err) {
        throw err
    } 
    app.listen(process.env.PORT || 5000)
})
