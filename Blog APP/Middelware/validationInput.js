const { body } = require("express-validator");

const validate = (req, res, next) => {
  body("username").isLength({ min: 5, max: 10 }).trim().escape();

  next();
};

module.exports = validate;
