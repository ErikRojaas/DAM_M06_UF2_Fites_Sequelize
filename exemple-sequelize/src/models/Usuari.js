const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Usuari = sequelize.define('Usuari', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nom: {
        type: DataTypes.STRING
    },
    data_registre: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    idioma: {
        type: DataTypes.STRING,
        defaultValue: 'ca'
    }
}, {
    tableName: 'usuaris'
});

module.exports = Usuari;
