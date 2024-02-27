const express = require("express");
const { body, validationResult } = require("express-validator");
const mid = require("./Middelware/postMiddle");
const verifyToken = require("./Middelware/verify-jwt");
const validate = require("./Middelware/validationInput");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 3001;
const Proute = require("./Routes/postRoutes");
const inscRoute = require("./Routes/registRoute");
const aut_route = require("./Routes/authRoute");
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mid.log);
//body("username").isLength({ min: 5, max: 10 }).trim().escape()
app.use(
  "/register",
  body("username").isLength({ min: 5, max: 10 }).trim().escape(),
  body("password").isLength({ min: 5, max: 10 }).trim().escape(),
  inscRoute
);
app.use("/login", aut_route);

app.use("/blogs", verifyToken, Proute);

// Handling any routes that don't match the ones above with a 404

app.use(mid.errorHandling);
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
