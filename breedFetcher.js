// const breed = "Siberian";
// const fs = require('fs');

const fetchBreedDescription = (breedName, callback) => {
  const request = require('request');
  const breedAPI = "https://api.thecatapi.com/v1/breeds/search?name=";
  request(breedAPI + breedName, (error, response, body) => {
    if (error) {
      return callback(error, null);
    } else {
      const breedData = JSON.parse(body);
      if (breedData.length === 0) {
        // console.log("No results found");
        return callback("No results found", null);
      } else {
        console.log(breedData[0].description.constructor);
        return callback(null, breedData[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
