import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import { ApolloProvider } from 'react-apollo'

import Home from './components/HomePage'
import AllCategories from './components/AllCategories'
import LogIN from './components/Login'

import ApplicationError from './Errors/ApplicationError'
import QueryError from './Errors/QueryError'

import './index.css'
import 'tachyons'
import 'antd/dist/antd.css';

import client from './ApolloClient'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/all-categories' component={AllCategories} />
        <Route path='/protected-page' component={ApplicationError} />
        <Route path='/query-level-error' component={QueryError} />
        <Route path='/login' component={LogIN} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
