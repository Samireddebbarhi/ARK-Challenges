const fs = require("fs");

function readFileAsync(filePath) {
  return new Promise((resolved, rejected) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (!err) resolved(data);
      else rejected(Error("failed to read this code"));
    });
  });
}
function writeFileAsync(pathf, content) {
  return new Promise((resolved, rejected) => {
    fs.writeFile(pathf, content, (err) => {
      if (!err) resolved(`${pathf} are wrote Succefully`);
      else rejected(Error("Failed to write a file"));
    });
  });
}
const inputData = readFileAsync("input.txt").then(
  (data) => JSON.parse(data).cities
);

function selectRandomCity(iData) {
  const randomIndex = Math.floor(Math.random() * iData.length);
  return iData[randomIndex];
}

const FileOperate = async () => {
  let city = selectRandomCity(await inputData);

  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=" +
      city.lat +
      "&longitude=" +
      city.lng +
      "&current_weather=true"
  );
  const data = await response.json();

  return await writeFileAsync(
    `${city.name}.txt`,
    data.current_weather.temperature.toString()
  );
};

module.exports = FileOperate();
