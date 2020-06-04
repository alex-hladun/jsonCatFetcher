const request = require('request');
const breedAPI = "https://api.thecatapiX.com/v1/breeds/search?name=";
// const breed = "Siberian";
// const fs = require('fs');
const args = process.argv.slice(2);
const breed = args[0];

const breedDetails = request(breedAPI + breed, (error, response, body) => {
  if (error) {
    console.log("Request Error:");
    console.log(error);
    return;
  }
  // console.log(body);
  // console.log(typeof(body));
  const breedData = JSON.parse(body);
  if (breedData.length === 0) {
    console.log("No results found");
  } else {
    console.log(breedData[0].description);
  }
});