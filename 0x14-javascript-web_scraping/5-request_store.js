#!/usr/bin/node
/**
 * Script to get the content of a webpage and store it in a file.
 * - The first argument is the webpage URL.
 * - The second argument is the file path to save the content to.
 */

const fs = require('fs'); /* Import the File System module to write to files */
const request = require('request'); /* Import the 'request' module to send HTTP requests */

/*Send a GET request to the URL provided as the first command-line argument.*/
/*Pipe the response stream into a file specified by the second command-line argument.*/

request(process.argv[2]).pipe(fs.createWriteStream(process.argv[3]));
