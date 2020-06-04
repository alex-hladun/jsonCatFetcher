// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      // console.log(desc.constructor);
      
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      // console.log(expectedDesc.constructor);

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
  it('Returns an error if an invalid breed is passed in', (done) => {
    fetchBreedDescription('Alex', (err, desc) => {
      // assert.ifError
      assert.notEqual(err, null);
      assert.equal(err, "No results found");
      // console.log(err);
      // console.log(expectedDesc.constructor);

      done();
    });
  });
});