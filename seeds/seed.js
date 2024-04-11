const sequelize = require("../config/connection.js");
const { User, Password, Machine, Highscore, Image, Comment } = require("../models/index.js");

const userSeedData = require("./user.json");
const passwordSeedData = require("./password.json");
const machineSeedData = require("./machine.json");
const highscoreSeedData = require("./highscore.json");
const imageSeedData = require("./image.json");
const commentSeedData = require("./comment.json");



const seedUserDatabase = async () => {
  await sequelize.sync({ force: true });
// creating seed user info and machine
  const users = await User.bulkCreate(userSeedData);
  const machines = await Machine.bulkCreate(machineSeedData);

// add default password to seeded users
  for (const { id } of users) {
    const newpassword = await Password.create({
      uid: id, 
      password: JSON.stringify(passwordSeedData)
    });
  }

  // add highscore
  for (let i = 0; i < highscoreSeedData.length; i++) {
    const { id: randomuid } = users[Math.floor(Math.random() * users.length)];
    const { id: randommid } = machines[Math.floor(Math.random() * machines.length)];
  
    const newhighscore = await Highscore.create({
      score: JSON.stringify(parseInt(highscoreSeedData[i].score)),
      verified: JSON.stringify(highscoreSeedData[i].verified),
      uid: randomuid,
      mid: randommid
    });
  }

// add comments
  for (let ii = 0; ii < commentSeedData.length; ii++) {
    const { id: ruid } = users[Math.floor(Math.random() * users.length)];
    const { id: rmid } = machines[Math.floor(Math.random() * machines.length)];
  
    const newcomment = await Comment.create({
      comment: JSON.stringify(commentSeedData[ii].comment),
      uid: ruid,
      mid: rmid
    });
  }

process.exit(0);
};



seedUserDatabase();
