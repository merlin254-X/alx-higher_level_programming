#!/usr/bin/node
/**
 * A script that counts and prints the number of movies
 * where the character Wedge Antilles is present.
 */

const args = process.argv; /* Get the command-line arguments */
const reqURL = args[2]; /* The first argument should be the API endpoint URL */
const request = require('request'); /* Import the 'request' module */

request(reqURL, function (error, response, body) {
  if (error) {
    console.error('error:', error); /* Print the error if one occurred */
  } else {
    const json = JSON.parse(body); /* Parse the JSON response */
    const results = json.results; /* Get the array of movie results */
    let count = 0; /* Variable to count the movies with Wedge Antilles */

    /* Loop through each movie result */
    for (let i = 0; i < results.length; i++) {
      const characters = results[i].characters; /* List of characters in the movie */

      /* Check if Wedge Antilles (ID ending with '18/') is in the list of characters */
      for (let j = 0; j < characters.length; j++) {
        if (characters[j].endsWith('18/')) {
          count++; /* Increment the count if Wedge is in the movie */
        }
      }
    }

    console.log(count); /* Print the total count of movies with Wedge Antilles */
  }
});
