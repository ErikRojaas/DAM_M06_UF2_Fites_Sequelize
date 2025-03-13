const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Usuari = require('./Usuari');
const Video = require('./Video');

const Valoracio = sequelize.define('Valoracio', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipus: {
        type: DataTypes.ENUM('like', 'dislike'),
        allowNull: false
    }
}, {
    tableName: 'valoracions',
    indexes: [
        {
            unique: true,
            fields: ['usuari_id', 'video_id'] 
        }
    ]
});

module.exports = Valoracio;
