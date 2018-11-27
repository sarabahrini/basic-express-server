'use strict';

//ASK for clarification - Don't know why but it's always required 
require('dotenv').config();

// to compile ES6 code and make it understandable for every browser
require('babel-register');

//uses requires app.js to run its start method on the PORT
//because I'm using express I changed the syntax from to import app..
require('./src/app.js').start(process.env.PORT); 
// import app from './src/app.js';
// app.start(process.env.PORT);

// import version from './src/app.js';
// console.log('version', version)