const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config/connection.js");

class Image extends Model {}

Image.init(
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
        Image: {
            type: DataTypes.BLOB,
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
        hsid: {
<<<<<<< HEAD
            type: DataTypes.UUID,
=======
            type: DataTypes.UUIDV4,
>>>>>>> 49251c1046bc7ae273b88f273cb84a339077b1d4
            references: {
                model: "highscore",
                key: "id"
            }  
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "image",
    }
);

module.exports = Image;
