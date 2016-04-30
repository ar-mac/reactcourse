import React from 'react';
import ReactRouter, { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from '../components/Main.jsx';
import Home from '../components/Home.jsx';
import PromptContainer from '../containers/PromptContainer.jsx';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer.jsx';
import ResultsContainer from '../containers/ResultsContainer.jsx';
let routes;

export default routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route
        path="playerOne"
        header='Player one'
        component={PromptContainer}
      />
      <Route
        path="playerTwo/:playerOne"
        header='Player two'
        component={PromptContainer}
      />
      <Route
        path="battle"
        component={ConfirmBattleContainer}
      />
      <Route
        path="results"
        component={ResultsContainer}
      />
    </Route>
  </Router>
)
