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
        file_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        data: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        mimetype: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        filename: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        app_data: {
            type: DataTypes.JSONB,
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
