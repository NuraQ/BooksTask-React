  
import React from "react";
import {
  Router,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "../containers/Home/Home";
import Header from "../components/NavBar/NavBar";
import history from "./history";
import SearchHandler from '../components/SearchComponent/SearchHandler'
const RouterComponent = () => {
  const dispatch = useDispatch();
  return (
    <Router history={history}>
      <Header dispatch={dispatch} />
      <Switch>
        <SearchHandler>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/PurchasedBooks" />
        </SearchHandler>
      </Switch>
    </Router>
  );
};

export default RouterComponent;
