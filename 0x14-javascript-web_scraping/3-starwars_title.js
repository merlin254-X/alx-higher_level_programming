#!/usr/bin/node
/**
 * Script to print the title of a Star Wars movie.
 * - The first argument is the episode number as an integer.
 * - The script fetches the movie data from SWAPI (Star Wars API).
 */

const myArgs = process.argv.slice(2); /* Extract command-line arguments */
const request = require('request'); /* Import the 'request' module */

/* Construct the URL for the SWAPI endpoint using the episode number */
const url = `https://swapi-api.hbtn.io/api/films/${myArgs[0]}`;

request(url, function (error, response, body) {
  if (error) {
    console.error(error); /* Log the error if it occurs */
  } else {
    const movieData = JSON.parse(body); /* Parse the JSON response */
    console.log(movieData.title); /* Print the movie title */
  }
});
