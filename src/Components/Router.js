import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./Header";
import Main from "../Screens/Main";
import Newyear from "../Screens/Newyear";
import Shortwork from "../Screens/Shortwork";

export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/newyear" exact component={Newyear} />
          <Route path="/shortwork" exact component={Shortwork} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};
