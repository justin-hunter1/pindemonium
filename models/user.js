const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.UUID.V4,
            allowNull: false,
            primaryKey: true,
            defaultValue: sql.uuidV4
        },
        fname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isemail: true
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.email = await newUserData.email.toLowerCase();
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.email = await updatedUserData.email.toLowerCase();
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user",
    }
);

module.exports = User;
