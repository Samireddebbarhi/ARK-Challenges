const users = require("../Models/users");
const service = require("../Services/Adding");
const { validationResult } = require("express-validator");
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const body = req.body;
    const newUser = await service.addNewObj(body, users, "Models/users");
    res.status(201).send(newUser);
  } catch (error) {
    next(error);
  }
};
