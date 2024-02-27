const jwt = require("jsonwebtoken");
const user = require("../Models/users");

require("dotenv").config();

exports.HandleLogin = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).send({ msg: "Missing credentials" });

  const FoundUser = user.find(
    (user) => user.username === username && user.password === password
  );

  if (FoundUser) {
    const Newtoken = jwt.sign(
      { user: { id: FoundUser.id, username: FoundUser.username } },
      process.env.Token_Secret,
      {
        expiresIn: "10m",
      }
    );
    res.cookie("jwt", Newtoken);
    res.json(Newtoken);
  } else {
    return res.status(400).send({ error: "user Doesn't exist" });
  }
};
