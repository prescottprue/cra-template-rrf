import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home'

export default function createRoutes(store) {
  return (
    <Switch>
      <Route exact path={Home.path} component={Home.component} />
    </Switch>
  );
}
