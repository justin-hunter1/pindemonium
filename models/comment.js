const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.UUID.V4,
            allowNull: false,
            primaryKey: true,
            defaultValue: sql.uuidV4
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true
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
        modelName: "comment",
    }
);

module.exports = Comment;
