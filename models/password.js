const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config/connection.js");
const bcrypt = require("bcrypt");

class Password extends Model {}

Password.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        uid: {
            type: DataTypes.UUIDV4,
            references: {
                model: "user",
                key: "id"
            }  
        }
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            }, 
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },  
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "password",
    }
);

module.exports = Password;
