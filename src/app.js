'use strict';
// express is a function
import express from 'express';

// invoke express and assign it to a variable 
const app = express ();

// let http = require('http');

// const router = require('');
// const api = require('');

// let isRunning = false;


module.exports = {
  start:(port) => {app.listen(port, () => console.log('Running on', port));
}
}

// export default{
//   start:(port)=> console.log('PORT', port)
// }
// export const version = "1.0";