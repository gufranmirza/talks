'use strict'

const {createStore, applyMiddleware, combineReducers} = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios')

// constants
const SET_PUPPIES = 'SET_PUPPIES'
const LIKE = 'LIKE'


// sync action creators
const setPuppies = puppies => ({type: SET_PUPPIES, puppies})
const like = id => ({type: LIKE, id})

// async action creators
const fetchPuppies = () => dispatch => {
  axios.get('/api/puppies')
    .then(res => {
      dispatch(setPuppies(res.data))
    })
}


let initialState = {puppies: []}

// reducer
const reducer = function(state = initialState, action) {
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

module.exports = {store, like, fetchPuppies, reducer}
