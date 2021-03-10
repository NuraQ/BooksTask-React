import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../containers/Home/Home";
import App from "../App";
import history from "./history";
import Header from "../components/NavBar/NavBar";

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
