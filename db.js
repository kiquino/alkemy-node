const Sequelize = require('sequelize');

// const pelisseries = require('./models/peliculaSerie');
const users = require('./models/user');
const pelis = require('./models/peliculaSerie');
const personajes = require('./models/personaje');
const generos = require('./models/genero');

const sequelize = new Sequelize('disney_listado', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
});
const userdb = users(sequelize, Sequelize);
const pelisdb = pelis(sequelize, Sequelize);
const personajesdb = personajes(sequelize, Sequelize);
const generosdb = generos(sequelize, Sequelize);

// const ps = pelisseries(sequelize, Sequelize);

sequelize.sync({
    force: false
}).then(() => {
    console.log('tablas actualizadas');
})

module.exports = {
    userdb,
    pelisdb,
    personajesdb,
    generosdb
};