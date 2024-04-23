#!/usr/bin/node
/**
 * A script that computes the number of tasks completed by user ID.
 * - The first argument is the URL to fetch the task data.
 */

const args = process.argv; /* Get the command-line arguments */
const reqURL = args[2]; /* The URL to request data from */
const request = require('request'); /* Import the 'request' module */

/* Send a GET request to the specified URL and handle the response */
request(reqURL, function (error, response, body) {
  if (error) {
    console.log('error:', error); /* Print the error if it occurs */
  } else {
    const todos = JSON.parse(body); /* Parse the JSON response into an array */
    const dash = {}; /* Create an object to hold the counts by user ID */

    /* Loop through all tasks to count completed tasks by user ID */
    for (let i = 0; i < todos.length; i++) {
      const isCompleted = todos[i].completed; /* Check if the task is completed */
      const userId = todos[i].userId.toString(); /* Get the user ID as a string */

      if (isCompleted) {
        /* Increment the count for the user if completed, or initialize if not */
        dash[userId] = dash[userId] ? dash[userId] + 1 : 1;
      }
    }

    console.log(dash); /* Print the resulting counts by user ID */
  }
});
