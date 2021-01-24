import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import SignInPage from './components/signinpage';

const MyRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route path="/dashboard" component={App} />
      </Switch>
    </Router>
  );
};

export default MyRoute;
