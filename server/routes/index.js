const express = require('express')
const app = express()
app.use(require('./login.js'));
app.use(require('./register.js'));
module.exports = app;