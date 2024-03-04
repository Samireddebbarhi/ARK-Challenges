const Blog = require("../Models/blogs");

const getBlog = async (req, res, next) => {
  try {
    const blogFound = await Blog.find({ userId: req.id })
      .then((data) => {
        res.status(200).json({
          "your blog is ": data,
        });
        console.log("Getting a blogs from  your profile ...");
      })
      .catch((err) =>
        res.status(404).json({ message: "No blog found on this profile !" })
      );
  } catch (error) {
    next(error);
  }
};

const createBlog = (req, res, next) => {
  try {
    const blog = req.body;
    const newBlog = new Blog({
      userId: req.id,
      title: blog.title,
      content: blog.content,
    });
    newBlog.save().then((data) => {
      res.status(201).send(`Adding Blog : ${data}`);
      console.log("Created a new Blog!");
    });
  } catch (error) {
    next(error);
  }
};

const updateBlog = async (req, res) => {
  try {
    if (!req.body.content || !req.body.title) {
      res.status(400).send("Missing fields");
    } else {
      await Blog.updateOne(
        { _id: req.params.id, userId: req.id },
        {
          $set: {
            title: req.body.title,
            content: req.body.content,
          },
        }
      ).then((updatedBlog) => {
        res.status(200).send(updatedBlog);
        console.log("Updated Blog");
      });
    }
  } catch {
    res.status(204).send("No content");
  }
};

const deleteBlog = async (req, res) => {
  try {
    const result = await Blog.deleteOne({ _id: req.params.id, userId: req.id });
    if (!result) {
      return res
        .status(401)
        .json({ msg: "You are not authorized to perform this action" });
    }
    res.status(200).json({ msg: "Deleted blog successfully!" });
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};

const deletedAllBlog = async (req, res) => {
  try {
    await Blog.deleteMany({ userId: req.id }).then(() =>
      res
        .status(200)
        .json({ msg: "all Blogs from your profile are deleted succefully" })
    );
  } catch {
    res.status(500).send("failed!!");
  }
};
module.exports = {
  deletedAllBlog,
  deleteBlog,
  updateBlog,
  getBlog,
  createBlog,
};
