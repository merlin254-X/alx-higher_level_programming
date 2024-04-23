#!/usr/bin/node
/**
 * Script to print all characters of a Star Wars movie by movie ID.
 * - The first argument is the Movie ID (e.g., 3 for "Return of the Jedi").
 * - The script fetches data from the Star Wars API.
 * - It uses the 'request' module to send HTTP requests.
 */

const request = require('request'); /* Import the 'request' module */
const movieId = process.argv[2]; /* Get the movie ID from command-line arguments */
const movieUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`; /* Construct the URL for the movie */

request(movieUrl, function (error, response, body) {
  if (error) {
    console.error('Error fetching movie data:', error); /* Handle errors if any occur */
  } else {
    const movieData = JSON.parse(body); /* Parse the JSON response */
    const characterUrls = movieData.characters; /* Get the list of character URLs */

    characterUrls.forEach((characterUrl) => {
      /* For each character URL, send a request to get character details */
      request(characterUrl, (err, res, charBody) => {
        if (err) {
          console.error('Error fetching character data:', err);
        } else {
          const characterData = JSON.parse(charBody); /* Parse the character data */
          console.log(characterData.name); /* Print the character's name */
        }
      });
    });
  }
});
