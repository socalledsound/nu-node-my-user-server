const express = require('express');
const indexRouter = express.Router();
const userRoutes = require('./users')

/* GET home page. */
indexRouter.get('/', (req, res, next) => {
  res.send('login server is running');
});

module.exports = { indexRouter, userRoutes } 