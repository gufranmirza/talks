'use strict'

const {createStore, applyMiddleware, combineReducers} = require('redux');
const thunkMiddleware = require('redux-thunk').default;


// constants
const SET_PUPPIES = 'SET_PUPPIES'
const LIKE = 'LIKE'


// sync action creators
const setPuppies = puppies => ({type: SET_PUPPIES, puppies})
const like = id => ({type: LIKE, id})


let preloadedState = {puppies: []}

// allows us to avoid 'window is not defined' on the server
if (typeof(window) !== 'undefined') {
  console.log('grabbing state off window')
  preloadedState = window.__PRELOADED_STATE__
}


// reducer
const reducer = function(state = preloadedState, action) {
  switch (action.type) {
    case SET_PUPPIES:
      return {puppies: action.puppies}

    case LIKE:
      return {puppies: state.puppies.map(puppy => {
        if (puppy.id === action.id) {puppy.likes += 1}
          return puppy
        })
      }

    default: return state
  }
}

const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, middleware);

module.exports = {store, like, reducer}










const axios = require('axios')
