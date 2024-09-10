"use strict";

const { DataTypes } = require("sequelize");

/**
 *  Since umzug and Sequelize CLI might not fully support ES Modules for migrations, you can switch your migration files to CommonJS (.cjs)
 * for some reason the tile that create the table must be in cjs but others not
 */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable("user", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Creates a unique index
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Creates a unique index
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      deletedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });

    // Adding additional indexes
    await queryInterface.addIndex("user", ["username"], {
      name: "username_index",
      unique: true, // Optional: unique index
    });

    await queryInterface.addIndex("user", ["email"], {
      name: "email_index",
      unique: true, // Optional: unique index
    });
  },

  async down(queryInterface) {
    // Remove indexes first
    await queryInterface.removeIndex("user", "username_index");
    await queryInterface.removeIndex("user", "email_index");

    // Then drop the table
    await queryInterface.dropTable("user");
  },
};
