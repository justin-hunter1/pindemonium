const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Highscore extends Model {}

Highscore.init(
    {
        id: {
            type: DataTypes.UUID.V4,
            allowNull: false,
            primaryKey: true,
            defaultValue: sql.uuidV4
        },
        score: {
            type: DataTypes.STRING,
            allowNull: true
        },
        uid: {
            type: DataTypes.UUID.V4,
            references: {
                model: "user",
                key: "id"
            }  
        },
        mid: {
            type: DataTypes.UUID.V4,
            references: {
                model: "machine",
                key: "id"
            }  
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "highscore",
    }
);

module.exports = Highscore;
