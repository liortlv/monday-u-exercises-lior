"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Tasks", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         text: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         pokemonID: {
            type: Sequelize.INTEGER,
         },
         pokemonName: {
            type: Sequelize.STRING,
         },
         pokemonType: {
            type: Sequelize.STRING,
         },
         imageURL: {
            type: Sequelize.STRING,
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("Tasks");
   },
};
