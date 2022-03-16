const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Message extends Model {}

Message.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        message_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message_embed: {
            type: DataTypes.JSON,
        },
        message_attachments: {
            type: DataTypes.JSON,
        },
        mentions: {
            type: DataTypes.JSON,
        },
        createdTimestamp: {
            type: DataTypes.DATE
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'message',
      }
)

module.exports = Message;