const logout = (req, res) => {
  if (req.cookies["connect.sid"]) {
    req.session.destroy(); // destroy session data
    res.clearCookie("connect.sid");
    return res.json({ message: "logging out" });
  } else {
    console.log("No Session Available");
    return res.status(403).send("Session Not Found");
  }
};

module.exports = logout;
