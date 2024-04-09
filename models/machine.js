const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config/connection.js");

class Machine extends Model {}

Machine.init(
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
        mname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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
