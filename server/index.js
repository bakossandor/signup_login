const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const bcrypt = require('bcrypt')
const MongoClient = require('mongodb').MongoClient

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const saltRounds = 10

app.get('/users', (req, res) => {
    db.collection('users').find({}).project({password: 0}).toArray((err, result) => {
        res.send(result);
    })
})

app.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
        const obj = req.body
        obj.password = hash
        db.collection('users').save(obj, (err, result) => {
            res.json(result)
        })
    });
})
    
app.post('/login', (req, res) => {
    const loginPW = req.body.password
    db.collection('users').findOne({"userName": req.body.userName}, {projection: {"password": 1, "_id": 0}}, (err, result) => {
        bcrypt.compare(loginPW, result.password).then(function(r) {
            res.send(r)
        });
        
    })
})

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) {
        throw err
    }
    db = client.db('signup_login')
    app.listen(process.env.PORT || 5000)
})
