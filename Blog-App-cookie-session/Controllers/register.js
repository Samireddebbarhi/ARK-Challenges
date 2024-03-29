const users = require("../Models/users");
const service = require("../Services/Adding");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).send({ error: "All fields are required" });

    const founded = users.find((p) => p.username === username);
    if (founded)
      return res.status(409).json({ error: "Username already exists." });

    let hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      username,
      password: hashedPassword,
    };
    const newUser = await service.addNewObj(user, users, "Models/users");
    res.status(201).send(`${user.username} was registered successfully `);
  } catch (error) {
    next(error);
  }
};
