import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginRoute from './Login';
import SignupRoute from './Signup';
import Home from './Home';
import RemindersRoute from './Reminders';

export default function createRoutes() {
  return (
    <Switch>
      <Route exact path={Home.path} component={Home.component} />
      {/* Build Route components from routeSettings */
      [
        LoginRoute,
        SignupRoute,
        RemindersRoute,
        /* Add More Routes Here */
      ].map(({ path, component }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Route key={`Route-${index}`} path={path} component={component} />
      ))}
    </Switch>
  );
}
