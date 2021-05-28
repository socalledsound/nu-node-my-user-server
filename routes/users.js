const express = require('express')
const User = require('../models/user')
const userRoutes = express.Router()

userRoutes.get('/', (req, res, next) => {
    User.find()
    .then((users) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(users)
    })
    .catch(err => next(err))
})

userRoutes.post('/signup', (req, res, next) => {
    User.findOne({username : req.body.username})
    .then( user => {
        if(user){
            const err = new Error(`User ${req.body.username} already exists!`);
            err.status = 403;
            return next(err);
        } else {
            User.create({
                username: req.body.username,
                password: req.body.password,
            })
            .then( user => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({status: 'Registration Successful!', user: user});
            })
            .catch(err => next(err));
        }
    })
    .catch(err => next(err));
})

module.exports = userRoutes