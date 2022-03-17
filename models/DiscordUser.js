const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DiscordUser extends Model {}

DiscordUser.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'discorduser',
      }
)

module.exports = DiscordUser;