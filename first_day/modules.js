const people = require('./people.js');   // This is how we import modules from other files.

// console.log(people, "people");

const os = require('os');

// console.log(os, 'os');

console.log(os.platform(), os.homedir());