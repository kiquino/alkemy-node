let express = require('express');
let app = express.Router();
const {
    personajesdb,
    pelisdb
} = require('../../db');
app.get('/', async (req, res) => {

    const age = req.params.age;
    const movie = req.params.movie;
    const name = req.params.name;



    if (age == undefined && movie == undefined && name == undefined) {
        let pjs = await personajesdb.findAll();
        res.render('personajes', {
            title: 'Personajes',
            characters: pjs,
            nombre: pjs.nombre,
            historia: pjs.historia,
            imagen: pjs.imagen,
            type: 'characters'


        })
    } else {
        let pjs = await personajesdb.findAll({
            where: {
                edad: age,
                id_peliculaSerie: movie,
                nombre: name
            }
        });
        res.render('personajes', {
            title: 'Personajes',
            characters: pjs,
            nombre: pjs.nombre,
            historia: pjs.historia,
            imagen: pjs.imagen,
            type: 'characters'

        })
    }



})
app.get('/create', async (req, res) => {
    res.render('create', {
        title: 'Crear Personaje',

    })
})
app.post('/create', async (req, res) => {
    const {
        nombre,
        historia,
        imagen,
        peso,
        edad
    } = req.body;
    const newCharacter = await personajesdb.create({
        nombre,
        historia,
        imagen,
        edad,
        peso,
        id_peliculaSerie: 1,
        createAt: new Date(),
        updateAt: new Date()
    })
    res.redirect('/api/characters');
})
app.get('/update/:id', async (req, res) => {
    const pj = await personajesdb.findOne({
        where: {
            id: req.params.id
        }
    });
    res.render('update', {
        title: 'Actualizar Personaje',
        id: pj.id,
        nombre: pj.nombre,
        historia: pj.historia,
        imagen: pj.imagen,
        edad: pj.edad,
        peso: pj.peso,
        id_peliculaSerie: pj.id_peliculaSerie,
        type: 'characters'

    })
})
app.post('/update/:id', async (req, res) => {

    const pj = await personajesdb.findOne({
        where: {
            id: req.params.id
        }
    });
    pj.set({
        nombre: req.body.nombre,
        historia: req.body.historia,

        edad: req.body.edad,
        peso: req.body.peso,

    })
    await pj.save();
    res.redirect('/api/characters/read/' + pj.id);
})
app.get('/delete/:id', async (req, res) => {
    const pj = await personajesdb.findOne({
        where: {
            id: req.params.id
        }
    });
    await pj.destroy();
    res.redirect('/api/characters');
})
app.get('/read/:id', async (req, res) => {
    const id = req.params.id;
    const pjs = await personajesdb.findOne({
        where: {
            id: id
        }
    });
    const pelispj = await pelisdb.findAll({
        where: {
            id_personaje: id
        }
    });


    res.render('read', {
        title: 'Personaje info',
        id: pjs.id,
        nombre: pjs.nombre,
        historia: pjs.historia,
        imagen: pjs.imagen,
        type: 'characters',
        peliculas: pelispj
    })

})

module.exports = app;