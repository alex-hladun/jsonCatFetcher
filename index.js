const args = process.argv.slice(2);
const breed = args[0];
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error details:', error);
  } else {
    console.log(desc);
  }
});