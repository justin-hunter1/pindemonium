const sequelize = require("../config/connection");
const { User, Password, Machine, Highscore, Image, Comment } = require("../models/model.js");

const userSeedData = require("./user.json");
const passwordSeedData = require("./password.json");
const machineSeedData = require("./machine.json");
const highscoreSeedData = require("./highscore.json");
const imageSeedData = require("./image.json");
const commentSeedData = require("./comment.json");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const user = await User.bulkCreate(userSeedData);

//   for (const { id } of drivers) {
//     const newLicense = await License.create({
//       driver_id: id,
//     });
//   }
//   for (const car of carSeedData) {
//     const newCar = await Car.create({
//       ...car,
// // Attach a random driver ID to each car
//       driver_id: drivers[Math.floor(Math.random() * drivers.length)].id,
//     });
//   }

  process.exit(0);
};

seedDatabase();
