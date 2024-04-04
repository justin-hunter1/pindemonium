// import models
const User = require("./user.js");
const Password = require("./password.js");
const Machine = require("./machine.js");
const Highscore = require("./highscore.js");
const Image = require("./image.js");
const Comment = require("./comment.js");

// // Products belongsTo Category
// Product.belongsTo(Category, { foreignKey: "category_id" });


// Category.hasMany(Product, { foreignKey: "category_id", onDelete: "SET NULL" });


// Product.belongsToMany(Tag, { through: ProductTag, foreignKey: "product_id" });


// Tag.belongsToMany(Product, { through: ProductTag, foreignKey: "tag_id" });

module.exports = { User, Password, Machine, Highscore, Image, Comment };
