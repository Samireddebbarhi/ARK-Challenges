const blogs = require("../blogs.json");
const Blog = require("../Models/postModules");
const service = require("../Services/Adding");
const { body, validationResult } = require("express-validator");
// Get all blogs
const getBlogs = async (req, res, next) => {
  const err = new Error("No Blog Found");
  try {
    const data = await Blog.getAllBlog();
    res.status(200).send({ message: "Success", data: data });
    console.log("Getting all the blogs...");
  } catch (err) {
    next(err);
  }
};

const getBlog = (req, res, next) => {
  try {
    const blogId = parseInt(req.params.id);
    const blogFound = blogs.find((blog) => blog.id === blogId);
    if (!blogFound) {
      const error = new Error(`Blog with id ${blogId} not found.`);
      error.httpStatusCode = 404;
      throw error;
    }

    res.status(200).send(blogFound);
    console.log("Getting a specific blog by ID :" + blogId);
  } catch (error) {
    next(error);
  }
};

const createBlog = async (req, res, next) => {
  try {
    const body = req.body;
    const data = await Blog.getAllBlog();
    const newData = await service.addNewObj(body, data, "blogs");
    res.status(201).send(newData);
  } catch (error) {
    next(error);
  }
};

/*const body = req.body;
  console.log(body);
  const id = blogs.length + 1;
  const newBlog = { id, ...body };

  if (!body) {
    const err = new Error();
    res.status(err.statusCode || 500).send({ message: "Invalid Body" });
    next(err);
  } else {
    blogs.push(newBlog);
    res.status(201).send(newBlog);
  }

  console.log("Creating a new blog...");
};
*/
module.exports = { getBlogs, getBlog, createBlog };
