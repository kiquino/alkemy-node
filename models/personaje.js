module.exports = (sequelize, type) => {
    return sequelize.define('personaje', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        imagen: {
            type: type.STRING(300),
            allowNull: true,
            defaultValue: null
        },
        nombre: {
            type: type.STRING,
            allowNull: false

        },
        edad: {
            type: type.INTEGER,
            allowNull: false,

        },
        peso: {
            type: type.INTEGER,
            allowNull: false,

        },
        historia: {
            type: type.TEXT,
            allowNull: true,
            defaultValue: null
        },
        id_peliculaSerie: {
            type: type.INTEGER,
            allowNull: false
        }
    })
}