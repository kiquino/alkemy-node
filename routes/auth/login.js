let express = require('express');
const {
    redirect
} = require('express/lib/response');
let app = express.Router();
let jsonwebtoken = require('jsonwebtoken');
let cookies = require('cookie-parser');
const {
    userdb
} = require('../../db');

app.post('/', async (req, res) => {
    let email = req.body.email;
    let contraseña = req.body.password;

    const findUser = await userdb.findAll({
        where: {
            email: email,
            contraseña: contraseña
        }
    })

    if (findUser.length > 0) {
        const token = jsonwebtoken.sign({
            data: findUser
        }, 'secretcodesh', {
            expiresIn: '1h'
        })

        res.cookie('token', token);
        res.redirect('/../api/characters');

    } else {
        res.render('loginRegistro', {
            title: 'login',
            method: 'POST',
            action: '../../auth/login',
            mensaje: 'Usuario o contraseña incorrectos'
        })
    }







})

module.exports = app;