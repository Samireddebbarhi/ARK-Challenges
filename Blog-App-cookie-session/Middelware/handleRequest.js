const HandleRequest = (req, res, next) => {
  const idsession = req.sessionID;
  const idcookie = req.cookies["connect.sid"]?.split(":")[1].split(".")[0];
  console.log(idcookie);
  if (idsession !== idcookie) {
    return res.status(401).send("you must logging to view this resource ");
  } else {
    console.log("Connected");
    next();
  }
};

module.exports = HandleRequest;
