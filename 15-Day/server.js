const http = require("http");
const url = require("url");

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

const HandleFunction = async (req, res) => {
  try {
    const queryObject = url.parse(req.url, true).query;
    const path = url.parse(req.url, true).pathname;
    if (path === "/weather") {
      for (let i = 0; i < cities.length; i++) {
        if (cities[i].name.toLowerCase() === queryObject.city.toLowerCase()) {
          const datares = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=" +
              cities[i].lat +
              "&longitude=" +
              cities[i].lng +
              "&current_weather=true"
          );
          const weatherData = await datares.json();
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(weatherData.current_weather));
          return;
        }
      }
      res.write("Unknown endpoint");
      res.end();
    }
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal server error");
  }
};

const server = http.createServer((req, res) => HandleFunction(req, res));

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
