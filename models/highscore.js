const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config/connection.js");

class Highscore extends Model {}

Highscore.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        score: {
            type: DataTypes.STRING,
            allowNull: false
        },
        verified: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        uid: {
            type: DataTypes.UUID,
            constraints: false,
            references: {
                model: "user",
                key: "id"
            }  
        },
        mid: {
            type: DataTypes.UUID,
            constraints: false,
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
