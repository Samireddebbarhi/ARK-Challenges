require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const AuthHeaders = req.headers.authorization || req.headers.Authorization;
  if (!AuthHeaders?.startsWith("Bearer")) return res.sendStatus(401);

  const Token = AuthHeaders.split(" ")[1];
  jwt.verify(Token, process.env.Token_Secret, (err, user) => {
    if (err) return res.status(403).send("InvalidToken");
    req.id = user.id;
    req.username = user.username;
    next();
  });
};

module.exports = verifyToken;
