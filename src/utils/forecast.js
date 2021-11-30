const request = require("request");

const forecast = (longitue, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=ef3f8e51147d136acf2763f58aa85a91&query=" +
    latitude +
    "," +
    longitue +
    "&units=m";

  request({ uri: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body?.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees out. The humidity is " +
          body.current.humidity +
          "%"
      );
    }
  });
};

module.exports = forecast;
