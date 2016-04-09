import React from 'react'
import ReactRouter, { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from '../components/Main.jsx'
import Home from '../components/Home.jsx'

let routes

export default routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
)
