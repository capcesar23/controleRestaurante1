const { DataTypes } = require('sequelize');
const sequelize = require('../configuracao/banco-dados');

const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nivelAcesso: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Usuario;
