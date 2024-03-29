const logout = require("../Controllers/logOut");

const LogOut = require("express").Router();

LogOut.delete("/", logout);

module.exports = LogOut;
