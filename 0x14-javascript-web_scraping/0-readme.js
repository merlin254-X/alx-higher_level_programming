#!/usr/bin/node
/**
 * Script to read and print the content of a file.
 * Takes the file path as the first command-line argument.
 */

const fs = require('fs'); /* Import File System module */
const filePath = process.argv[2]; /* Get the first command-line argument (file path) */

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err); /* Print the error if it occurs */
  } else {
    console.log(data); /* Print the file content if successful */
  }
});
