"use strict";

// made a new migration to add roles
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const ROLES = ["admin","user","seller"]
    
    await queryInterface.addColumn("user", "role", {
      type: DataTypes.ENUM(...ROLES),
      allowNull: false,
      defaultValue: "user",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("user", "role");
  },
};
