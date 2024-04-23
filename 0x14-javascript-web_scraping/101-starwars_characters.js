#!/usr/bin/node
/**
 * Script to print all characters from a Star Wars movie by movie ID.
 * - The first argument is the Movie ID (e.g., 3 = “Return of the Jedi”).
 * - The script uses the Star Wars API to get the list of characters.
 * - It must use the 'request' module for HTTP requests.
 */

const request = require('request'); /* Import the 'request' module */
const movieId = process.argv[2]; /* Get the movie ID from the command line */
const movieUrl = `https://swapi.dev/api/films/${movieId}/`; /* Construct the URL for the movie */

request(movieUrl, (error, response, body) => {
  if (error) {
    console.error('Error fetching movie data:', error); /* Handle request errors */
  } else {
    const movieData = JSON.parse(body); /* Parse the movie data from the response */
    const characterUrls = movieData.characters; /* Extract the character URLs array */

    /* Function to fetch and print character names sequentially */
    const printCharacter = (index) => {
      if (index >= characterUrls.length) return; /* Exit if index exceeds array length */

      const characterUrl = characterUrls[index]; /* Get the character URL */
      
      /* Send a request to get character details */
      request(characterUrl, (err, res, charBody) => {
        if (err) {
          console.error('Error fetching character data:', err); /* Handle errors */
        } else {
          const characterData = JSON.parse(charBody); /* Parse character data */
          console.log(characterData.name); /* Print the character's name */
          
          /* Recursive call to fetch the next character in order */
          printCharacter(index + 1);
        }
      });
    };

    /* Start the character fetching process from the first element */
    printCharacter(0);
  }
});
