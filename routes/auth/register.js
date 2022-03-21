let express = require('express');
let app = express.Router();
const {
    userdb
} = require('../../db');

app.post('/', async (req, res) => {
    let email = req.body.email;
    let contraseña = req.body.password;


    const usuario = await userdb.create({
        email: email,
        contraseña: contraseña,

    })
    res.json(usuario);
})


module.exports = app;