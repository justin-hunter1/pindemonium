const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config/connection.js");

class Image extends Model {}

Image.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        filename: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        uid: {
            type: DataTypes.UUID,
            references: {
                model: "user",
                key: "id"
            }  
        },
        hsid: {
            type: DataTypes.UUID,
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
