let express = require('express');
let app = express.Router();
const {personajesdb} = require('../../db');
app.get('/', async (req, res) => {

    const pjs = await personajesdb.findAll();

res.render('personajes',{
    title: 'Personajes',
    characters: pjs,
    nombre: pjs.nombre,
    historia: pjs.historia,
    imagen: pjs.imagen


})


})

module.exports = app;