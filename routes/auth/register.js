let express = require('express');
let app = express.Router();
const {
    userdb
} = require('../../db');

app.post('/', async (req, res) => {
    let email = req.body.email;
    let contraseña = req.body.password;

    const findSameUser = await userdb.findAll({
        where: {email: email}

        
    })
    if (findSameUser.length > 0){
        res.json({
            message: 'El usuario ya existe'
        })
    }else{

        const usuario = await userdb.create({
            email: email,
            contraseña: contraseña,
    
        })
        res.json(usuario);
    }
      
    
   

})


module.exports = app;