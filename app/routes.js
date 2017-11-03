/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import StartPage from './containers/StartPage';
import CounterPage from './containers/CounterPage';
import NewAlliancePage from './containers/NewAlliancePage';

export default () => (
  <App>
    <Switch>
      <Route path="/new-alliance" component={NewAlliancePage} />
      <Route path="/counter" component={CounterPage} />
      <Route path="/" component={StartPage} />
    </Switch>
  </App>
);
