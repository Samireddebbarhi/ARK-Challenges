const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome to my Express.js server!");
});

app.listen(3000, () => console.log("Server is running on port 3000"));
