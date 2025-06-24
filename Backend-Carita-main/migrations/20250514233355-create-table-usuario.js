'use strict';
const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("usuario",{
     id_usuario: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      email:{
        allowNull: false, 
            type: DataTypes.STRING(100),
      },
      senha:{
        allowNull: false, 
            type: DataTypes.STRING(100),
      },
      status:{
        allowNull: false, 
            type: DataTypes.BOOLEAN
      }
   }
  )},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("usuario");
  }
};
