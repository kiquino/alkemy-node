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
app.get('/login', function (req, res) {
    res.render('loginRegistro', {
        title: 'Login',
        method: 'post',
        action: '../../auth/login'
    });
})

app.get('/register', function (req, res) {
    res.render('loginRegistro', {
        title: 'Registro',
        method: 'POST',
        action: '../../auth/register'
    });
})
app.get('/characters', function (req, res) {

})
module.exports = app;