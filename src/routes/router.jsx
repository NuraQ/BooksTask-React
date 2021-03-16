import React from "react";
import {
  Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../containers/Home/Home";
import history from "./history";
import Header from "../components/NavBar/NavBar";
import PurchasedBooks from '../containers/PurchasedBooks/PurchasedBooks';
import BookDetails from '../containers/BookDetails/BookDetails';

const RouterComponent = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/PurchasedBooks" component={PurchasedBooks}/>
        <Route path="/BookDetails" component={BookDetails}/>

      </Switch>
    </Router>
  );
};

export default RouterComponent;
