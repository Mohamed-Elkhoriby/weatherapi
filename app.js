const request = require("request");
const latitude = process.argv[2];
const longtitude = process.argv[3];

const url = `http://api.weatherapi.com/v1/current.json?key=d64bf197df0946fb8b1143129231105&q=${latitude},${longtitude}`;

request({url, json: true}, (error, response) => {
  if (error) {
    console.log("Error Has Occured");
  } else if (response.body.error) {
    console.log(response.body.error.message);
  } else {
    const country =response.body.location.country;
    const weather = response.body.current.condition.text;
    console.log(country, weather);
  }
});

