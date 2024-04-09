// import models
const User = require("./user.js");
const Password = require("./password.js");
const Machine = require("./machine.js");
const Highscore = require("./highscore.js");
const Image = require("./image.js");
const Comment = require("./comment.js");

User.hasOne(Password, {foreignKey: "uid", onDelete: "CASCADE"});
Password.belongsTo(User, {foreignKey: "uid"});

User.hasMany(Machine, {foreignKey: "uid", onDelete: "CASCADE"});
Machine.belongsTo(User, {foreignKey: "uid"});

User.hasMany(Highscore, {foreignKey: "uid", onDelete: "CASCADE"});
Highscore.belongsTo(User, {foreignKey: "uid"});

User.hasMany(Image, {foreignKey: "uid", onDelete: "CASCADE"});
Image.belongsTo(User, {foreignKey: "uid"});

User.hasMany(Comment, {foreignKey: "uid", onDelete: "CASCADE"});
Comment.belongsTo(User, {foreignKey: "uid"});

Highscore.hasOne(Image, {foreignKey: "hsid", onDelete: "CASCADE"});
Image.belongsTo(Highscore, {foreignKey: "hsid"});

Machine.hasMany(Highscore, {foreignKey: "mid", onDelete: "CASCADE"});
Highscore.belongsTo(Machine, {foreignKey: "mid"});

Machine.hasMany(Comment, {foreignKey: "mid", onDelete: "CASCADE"});
Comment.belongsTo(Machine, {foreignKey: "mid"});

module.exports = { User, Password, Machine, Highscore, Image, Comment };
