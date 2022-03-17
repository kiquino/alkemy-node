let express = require('express');
let app = express.Router();



app.get('/', function (req, res) {
    let title = 'Disney';
    let message = 'Bienvenidos a Disney';

    res.render('index', {
        title: title,
        message: message,

    })
});
app.get('/auth/login', function (req, res) {
    res.render('loginRegistro', {
        title: 'Login',
        method: 'POST',
        action: ''
    });
})
app.get('/auth/register', function (req, res) {
    res.render('loginRegistro', {
        title: 'Registro',
        method: 'POST',
        action: ''
    });
})
module.exports = app;