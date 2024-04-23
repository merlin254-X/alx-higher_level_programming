#!/usr/bin/node
/**
 * Script to write a specified content to a file.
 * - The first argument is the file path.
 * - The second argument is the content to write.
 */

const myArgs = process.argv.slice(2); /* Get command-line arguments */
const fs = require('fs'); /* Import the File System module */

fs.writeFile(
  myArgs[0], /* File path (first argument) */
  myArgs[1], /* Content to write (second argument) */
  {
    encoding: 'utf-8', /* Specify UTF-8 encoding */
    flag: 'w', /* 'w' for write mode (overwrite if the file exists) */
  },
  (error) => {
    if (error) {
      console.log(error); /* Handle and display error */
    }
  }
);
