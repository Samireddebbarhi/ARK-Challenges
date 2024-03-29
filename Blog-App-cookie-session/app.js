const express = require("express");
const { body, validationResult } = require("express-validator");
const mid = require("./Middelware/postMiddle");
const HandleRequest = require("./Middelware/handleRequest");
const cookieParser = require("cookie-parser");
const app = express();
const session = require("express-session");
const PORT = process.env.PORT || 3009;
const Proute = require("./Routes/postRoutes");
const inscRoute = require("./Routes/registRoute");
const aut_route = require("./Routes/authRoute");
const logOut = require("./Routes/logoutRoute");
app.use(cookieParser());
app.use(express.json());
require("dotenv").config();
app.use(
  session({
    secret: process.env.secretId,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true }, // Secure: HttpOnly and Secure flags set
  })
);
app.use(mid.log);
//body("username").isLength({ min: 5, max: 10 }).trim().escape()
app.use(
  "/register",
  body("username").isLength({ min: 5, max: 10 }).trim().escape(),
  body("password").isLength({ min: 5, max: 10 }).trim().escape(),
  inscRoute
);
app.use("register", inscRoute);
app.use("/login", aut_route);

app.use("/blogs", HandleRequest, Proute);

app.use("/logout", logOut);

// Handling any routes that don't match the ones above with a 404

app.use(mid.errorHandling);
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
