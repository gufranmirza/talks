'use strict';

// typical server
const express = require('express');
const volleyball = require('volleyball');
const app = express();

const puppyData = require('./puppy').puppyData

app.use(volleyball);
app.use('/public', express.static('public'));

// send index.html
const indexPath = __dirname + '/browser/index.html'
app.get('/client', (req, res) =>{
  res.sendFile(indexPath)
})

app.get('/', (req, res) =>{
  res.send('Page cleared.')
})

app.get('/api/puppies', function (req, res) {
  res.send(puppyData)
})

app.listen(3000, function () {
  console.log('Server listening on port 3000...');
});
