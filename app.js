const express = require('express')
const app = express()
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors')
const { indexRouter, userRoutes } = require('./routes/index')
const mongoose = require('mongoose');
const config = require('./config')
const url = config.mongoUrl
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

connect.then(() => console.log('Connected to mongo server'),
    err => console.log(err)
);
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
    name: 'session-id',
    secret: '12345-67890-09876-54321',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
}));


app.use('/', indexRouter)
indexRouter.use('/users', userRoutes)

module.exports = app