import fs from "fs";

function writeFileAsync(filePath, content) {
  return new Promise((resolved, rejected) => {
    fs.writeFile(filePath, content, (err) => {
      if (!err) resolved(`${filepath} are wrote`);
      else rejected(Error("Failed to write a file"));
    });
  });
}

function readFileAsync(filePath, encoding) {
  return new Promise((resolved, rejected) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (!err) resolved(console.log(data));
      else rejected(Error("failed to read this code"));
    });
  });
}

function processFiles(FilePaths) {
  for (const FilePath in FilePaths) {
    return readFileAsync(FilePath, "UTF-8").then((data) => {
      writeFileAsync(
        `${FilePath}`.slice(0, -4).concat("_modified.txt"),
        data.toUppercase()
      )
        .then((resol) => console.log(resol))
        .catch((err) => console.log(err));
    });
  }
}

export { readFileAsync, writeFileAsync, processFiles };
