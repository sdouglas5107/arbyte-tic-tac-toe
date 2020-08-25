import React from "react";
import { Switch, Route } from "react-router-dom";
import Game from "./page/Game";
import Login from "./page/Login";
import Logout from "./page/Logout";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/game" component={Game}></Route>
      <Route path="/logout" component={Logout}></Route>
    </Switch>
  );
};

export default Routes;
