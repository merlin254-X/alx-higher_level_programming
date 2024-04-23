#!/usr/bin/node
/**
 * Script to display the status code of a GET request.
 * - The first argument is the URL to send the GET request to.
 */

const myArgs = process.argv.slice(2); /* Get command-line arguments */
const request = require('request'); /* Import the 'request' module */

request
  .get(myArgs[0]) /* Send a GET request to the provided URL */
  .on('response', function (response) {
    console.log(`code: ${response.statusCode}`); /* Display the status code */
  })
  .on('error', error => {
    console.log(error); /* Display any errors encountered during the request */
  });
