let express = require('express');
let app = express.Router();
let jsonwebtoken = require('jsonwebtoken');

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
        res.json({
            message: 'Login correcto',
            token: token
        })

    }else{
        res.render('loginRegistro', {
            title: 'login',
            method: 'POST',
            action: '../../auth/login',
            mensaje: 'Usuario o contraseña incorrectos'
        })
    }
        
    



    console.log(findUser + "esto es el resultado de su busqueda");

})

module.exports = app;