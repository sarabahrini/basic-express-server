/*
handles a GET on '/' with a simple response of 'hello'
handles a POST on '/save' with a JSON response containing the data posted to the server
*/

import express from 'express';

const router = new express.Router();

router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'text/html');
  res.send('hello');
});

router.post('/save', (res,req) => {
res.statusCode = 200,
res.statusMessage = 'OK';
res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringify(req.body));
});

export default router;