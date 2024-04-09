const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config/connection.js");

class Machine extends Model {}

Machine.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        mname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        uid: {
            type: DataTypes.UUID,
            references: {
                model: "user",
                key: "id"
            }  
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "machine",
    }
);

module.exports = Machine;
