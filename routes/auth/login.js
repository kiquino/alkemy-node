let express = require('express');
let app = express.Router();

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

    if (findUser) {
        res.json(findUser);
    }else{
        res.json({
            message: 'Usuario no encontrado'
        })
    }
        
    



    console.log(findUser + "esto es el resultado de su busqueda");

})

module.exports = app;