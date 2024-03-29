const fs = require("fs");

exports.addNewObj = (body, result, path) => {
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
