'use strict';

const React = require('react');
const {PuppyContainer} = require('./puppy-container');
const { Provider } = require('react-redux');
const { store } = require('./redux');

class AppWithProvider extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <PuppyContainer />
      </Provider>
    )
  }
}
module.exports = { AppWithProvider }
