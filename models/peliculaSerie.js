module.exports = (sequelize, type) => {
    return sequelize.define('peliculaSerie', {
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
        titulo: {
            type: type.STRING,
            allowNull: false

        },
        fecha_de_creacion: {
            type: type.DATE,
            allowNull: true,
            defaultValue: null
        },
        calificacion: {
            type: type.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        id_personaje: {
            type: type.INTEGER,
            allowNull: true,
            defaultValue: null
        }
    })
}