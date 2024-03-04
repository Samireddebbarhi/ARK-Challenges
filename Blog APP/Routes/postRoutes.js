const express = require("express");
const crud = require("../Controllers/postControllers");
const Proute = express.Router();
Proute.get("/", crud.getBlog);
Proute.post("/", crud.createBlog);
Proute.put("/:id", crud.updateBlog);
Proute.delete("/:id", crud.deleteBlog);
Proute.delete("/", crud.deletedAllBlog);

module.exports = Proute;
