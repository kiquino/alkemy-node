module.exports = (sequelize, type) => {
    return sequelize.define('genero', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        imagen: {
            type: type.STRING,
            allowNull: true,
            defaultValue: null
        },
        nombre: {
            type: type.STRING,
            allowNull: false

        },

        id_pelicula: {
            type: type.INTEGER,
            allowNull: true,
            defaultValue: null
        }
    })
}