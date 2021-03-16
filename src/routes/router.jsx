  
import React from "react";
import {
  Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../containers/Home/Home";
import Header from "../components/NavBar/NavBar";
import history from "./history";

const RouterComponent = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/PurchasedBooks" />
      </Switch>
    </Router>
  );
};

export default RouterComponent;