const users = require("../Models/users");
const bcrypt = require("bcrypt");

exports.HandleLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password)
      return res
        .status(400)
        .send({ error: "You must provide username and password" });

    const foundUser = users.find((user) => user.username === username);
    if (!foundUser)
      return res.status(401).send({ error: `Username ${username} not found.` });

    const match = await bcrypt.compare(password, foundUser.password);

    if (match) {
      req.session.isAuthenticated = true;
      console.log(req.sessionID);
      res.status(200).send(`HI ${foundUser.username} you connected succefully`);
    }
  } catch (err) {
    console.log(err);
  }
};
