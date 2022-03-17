module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: type.STRING,
            allowNull: false
        },
        contraseña: {
            type: type.STRING,
            allowNull: false

        },
        token: {
            type: type.STRING(250),
            allowNull: true,
            defaultValue: null
        }
    })
}