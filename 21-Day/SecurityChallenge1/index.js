const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const escapeHTml = require("escape-html");
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "ADfg12345",
    username: "admin",
    resave: true,
    saveUninitialized: true,
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Sample Vulnerable Node.js Application");
});

app.get("/login", (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form action="/login" method="POST">
      <input type="text" name="username" placeholder="Username" required><br>
      <input type="password" name="password" placeholder="Password" required><br>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Authenticate user (vulnerable code for the challenge)
  if (
    username == escapeHTml(req.body.username) &&
    password == escapeHTml(req.body.password)
  ) {
    // to preventing  the use of XSS attacks
    req.session.authenticated = true;
    res.redirect("/profile");
  } else {
    res.send("Invalid username or password");
  }
});

app.get("/profile", (req, res) => {
  if (req.session.authenticated) {
    res.send(`<h1>Welcome to your profile, ${req.session.username}</h1>`);
  } else {
    res.redirect("/login");
  }
});

// Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
