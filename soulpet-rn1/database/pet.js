const Cliente = require("./cliente");
const { connection } = require("./database");
const { DataTypes } = require("sequelize");

const Pet = connection.define("pet", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    porte: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNasc: {
        type: DataTypes.DATEONLY,
    },
});

// Relacionamento 1:N (Um cliente pode ter N pets)
Cliente.hasMany(Pet);
Pet.belongsTo(Cliente); // Um pet pertence a um cliente

module.exports = Pet;