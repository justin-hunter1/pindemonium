const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config/connection.js");

class Highscore extends Model {}

Highscore.init(
    {
        id: {
<<<<<<< HEAD
            type: DataTypes.UUID,
=======
            type: DataTypes.UUIDV4,
>>>>>>> 49251c1046bc7ae273b88f273cb84a339077b1d4
            allowNull: false,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        score: {
            type: DataTypes.STRING,
            allowNull: true
        },
        uid: {
<<<<<<< HEAD
            type: DataTypes.UUID,
=======
            type: DataTypes.UUIDV4,
>>>>>>> 49251c1046bc7ae273b88f273cb84a339077b1d4
            references: {
                model: "user",
                key: "id"
            }  
        },
        mid: {
<<<<<<< HEAD
            type: DataTypes.UUID,
=======
            type: DataTypes.UUIDV4,
>>>>>>> 49251c1046bc7ae273b88f273cb84a339077b1d4
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
