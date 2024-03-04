const jwt = require("jsonwebtoken");
const users = require("../Models/users.js");
const bcrypt = require("bcrypt");
require("dotenv").config();
exports.HandleLogin = async (req, res) => {
  const user = req.body;
  if (!user)
    return res
      .status(400)
      .send({ error: "You must provide username and password" });

  users.find({ username: user.username }).then(async (data) => {
    try {
      const match = await bcrypt.compare(user.password, data[0].password);
      if (match) {
        const Newtoken = jwt.sign(
          { id: data[0]._id },
          process.env.Token_Secret,
          {
            expiresIn: "10m",
          }
        );
        res
          .status(200)
          .send(
            `HI ${user.username} you connected succefully  with token : ${Newtoken}`
          );
      } else
        res.status(401).send({
          error: `Sorry  this ${user.username} or Password are incorrect `,
        });
    } catch (err) {
      console.log(err);
    }
  });
};
