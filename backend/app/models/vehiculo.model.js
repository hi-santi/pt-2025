const { DataTypes } = require('sequelize');
const sequelize = require('../models');

const Vehiculo = sequelize.define('Vehiculo', {
  VehiculoID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Anio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: 'Vehiculos',
  timestamps: false,
});

module.exports = Vehiculo;