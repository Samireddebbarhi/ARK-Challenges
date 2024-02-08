const rl = require("readline");

const rL = rl.createInterface({ input: process.stdin, output: process.stdout });

const cities = [
  { name: "New York", lat: 40.7128, lng: -74.006 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "Paris", lat: 48.8566, lng: 2.3522 },
  { name: "Tokyo", lat: 35.6895, lng: 139.6917 },
  { name: "Sydney", lat: -33.8651, lng: 151.2099 },
  { name: "Rome", lat: 41.9028, lng: 12.4964 },
  { name: "Cairo", lat: 30.0444, lng: 31.2357 },
  { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Rabat", lat: 34.0209, lng: -6.8416 },
];
function readFileAsync(filePath) {
  return new Promise((resolved, rejected) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (!err) resolved(data);
      else rejected(Error("failed to read this code"));
    });
  });
}
function writeFileAsync(filePath, content) {
  return new Promise((resolved, rejected) => {
    fs.writeFile(filePath, content, (err) => {
      if (!err) resolved(`${filepath} are wrote`);
      else rejected(Error("Failed to write a file"));
    });
  });
}
function selectRandomCity(cities) {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}

const affiche = async (city) => {
  try {
    rL.question("Enter the name of city that you want:", async (answer) => {
      for (let obj of city) {
        if (obj.name.toLowerCase() === answer.toLowerCase) {
          const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=" +
              obj.lat +
              "&longitude=" +
              obj.lng +
              "&current_weather=true"
          );
          const data = await response.json();
          console.log(
            "the name city is : " +
              obj.name +
              "\n with temperature :" +
              data.current_weather.temperature
          );
        }
      }
      rL.close();
    });
  } catch (error) {
    console.log(error);
  }
};

affiche(cities);
