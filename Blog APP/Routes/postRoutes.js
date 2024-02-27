const express = require("express");
const crud = require("../Controllers/postControllers");
const Proute = express.Router();
Proute.get("/:id", crud.getBlog);
Proute.get("/", crud.getBlogs);

//Posts Routes
Proute.post("/", crud.createBlog);
module.exports = Proute;
