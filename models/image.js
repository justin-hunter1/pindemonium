const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Image extends Model {}

Image.init(
    {
        id: {
            type: DataTypes.UUID.V4,
            allowNull: false,
            primaryKey: true,
            defaultValue: sql.uuidV4
        },
        Image: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        uid: {
            type: DataTypes.UUID.V4,
            references: {
                model: "user",
                key: "id"
            }  
        },
        hsid: {
            type: DataTypes.UUID.V4,
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
