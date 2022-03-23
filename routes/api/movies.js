let express = require('express');

let app = express.Router();
const {
    pelisdb
} = require('../../db');


app.get('/', async (req, res) => {
    let peliculas = await pelisdb.findAll();
    res.render('peliculas', {
        title: 'Peliculas',
        mensaje: "lista de Peliculas",
        pelis: peliculas,
        type: 'movies'

    })
})

app.get('/read/:id', async (req, res) => {
    const id = req.params.id;
    const movies = await pelisdb.findOne({
        where: {
            id: id
        }
    });



    res.render('read', {
        title: 'Peli info',
        id: movies.id,
        nombre: movies.titulo,
        imagen: movies.imagen,
        fecha_de_creacion: movies.fecha_de_creacion.getFullYear()


    })
})
app.get('/create', async (req, res) => {
    res.render('create', {
        title: 'Crear Pelicula',
        type: 'movies'
    })
})
app.get('/update/:id', async (req, res) => {

    const movie = await pelisdb.findOne({
        where: {
            id: req.params.id
        }
    });
    res.render('updateMovie', {
        title: 'Actualizar Pelicula',
        id: movie.id,
        nombre: movie.titulo,

        imagen: movie.imagen,


        type: 'movies'

    })
})
app.post('/update/:id', async (req, res) => {
    const movie = await pelisdb.findOne({
        where: {
            id: req.params.id
        }
    });
    movie.set({
        titulo: req.body.title,


    })
    await movie.save();
    res.redirect('/api/movies/read/' + movie.id);
})
app.get('/delete/:id', async (req, res) => {

    const movie = await pelisdb.findOne({
        where: {
            id: req.params.id
        }
    });
    await movie.destroy();
    res.redirect('/api/movies');

})

module.exports = app;