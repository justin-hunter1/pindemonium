
const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "postgres://pindemonium_db_user:3WC08rocMQnojO7qmx3RjkwGwDBYaypA@dpg-cobm8jdjm4es739rqbf0-a/pindemonium_db",
      dialect: "postgres"
    }
  );
}


module.exports = sequelize;
