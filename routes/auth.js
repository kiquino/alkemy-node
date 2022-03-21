let express = require('express');
let app = express.Router();

const authUserLoginRouter = require('./auth/login');
const authUserRegisterRouter = require('./auth/register');

app.use('/login', authUserLoginRouter);
app.use('/register', authUserRegisterRouter);

module.exports = app;