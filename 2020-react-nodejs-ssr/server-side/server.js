'use strict';

/* ------------------------ TYPICAL EXPRESS CODE ----------------------- */

const express = require('express');
const volleyball = require('volleyball');
const puppyData = require('./puppy').puppyData

const app = express();

// middleware
app.use(volleyball);
app.use('/public', express.static('public'));


// prevent favicon 404s
app.get('/', function (req, res) {
  res.send('Page cleared.')
})

// server listening!
app.listen(1337, function () {
  console.log('Server listening on port 1337...');
});

/* ----------------- UNIQUE SERVER SIDE RENDERING CODE ---------------- */

require('node-jsx').install()
const React = require('react');
const { renderToString } = require('react-dom/server')
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const { reducer } = require('./browser/react/redux')
const { PuppyContainer } = require('./browser/react/puppy-container')


app.use('/server', handleRender)

// creates HTML layout and sends preloaded state to window
function renderFullPage(html, preloadedState) {
  return (
    '<!DOCTYPE html><html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" /><script src="public/bundle.js" defer></script><title>Server Side</title></head><body><div id="app"><div>' + html + '</div><script>window.__PRELOADED_STATE__ =' + JSON.stringify(preloadedState) +'</script></body></html>'
    )
}

// rendering function, every request gets a new store instance that intializes the app state
function handleRender(req, res) {
  const preloadedState = {puppies: puppyData}

  const store = createStore(reducer, preloadedState)
  const html = renderToString(React.createElement(Provider, {store: store}, React.createElement(PuppyContainer)))
  const finalState = store.getState()

  res.send(renderFullPage(html, finalState))
}
