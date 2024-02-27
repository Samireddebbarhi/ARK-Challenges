const blog = require("../blogs");
const fs = require("fs");
exports.getAllBlog = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./blogs.json", "utf8", (err, data) => {
      if (!err) {
        resolve(JSON.parse(data));
      } else {
        reject(err);
      }
    });
  });
};
exports.addNewPost = (body, result, path) => {
  let id = result.length + 1;
  let newPost = { id: id, ...body };
  result.push(newPost);
  return new Promise((resolve, reject) => {
    fs.writeFile(`./${path}.json`, JSON.stringify(result), "utf8", (err) => {
      if (!err) {
        console.log(`Data written to file`);
        resolve(result);
      } else {
        console.error(err);
        reject(err);
      }
    });
  });
};
