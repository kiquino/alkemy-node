let express = require('express');
let app = express.Router();

app.get('/', function (req, res) {

    res.render('index', {
        title: 'Disney',
        message: 'Welcome to Disney',

    })
})

module.exports = app;