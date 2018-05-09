const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const bcrypt = require('bcrypt')
const MongoClient = require('mongodb').MongoClient
const jwt = require('jsonwebtoken')
const config = require('./config/config')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60* 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

const saltRounds = 10

app.get('/users', (req, res) => {
    const token = req.headers.authorization
    console.log(token)
    // jwt.verify(token, config.authentication.jwtSecret, (err, decoded) => {
    //     if (err) {
    //         res.status(403).send({message: "invalid token"})
    //     } else {
            db.collection('users').find({}).project({password: 0}).toArray((err, result) => {
                res.send(result);
            })
    //     }
    // });
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
    const {userName, password} = req.body
    db.collection('users').findOne({"userName": userName}, (error, result) => {
        if (error) {
            return res.status(500).send({message: "error"})
        } else {
            if (!result) {
                return res.status(403).send({message: "wrong login credentials"})
            } else {
                bcrypt.compare(password, result.password, (err, bool) => {
                    if (err) {
                        return res.status(500).send({message: "error"})
                    } else {
                        if (!bool) {
                            return res.status(403).send({message: "wrong login credentials"})
                        } else {
                            res.send({
                                user: result.userName,
                                token: jwtSignUser(result)
                            })
                        }
                    }
                });
            }
        }
    })
})

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) {
        throw err
    }
    db = client.db('signup_login')
    app.listen(process.env.PORT || 5000)
})
