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
import LogOutPopup from '../components/Logout/Logout'
import AuthRoute from './AuthRoute'
const RouterComponent = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <AuthRoute path="/PurchasedBooks" Component={PurchasedBooks}/>
        <AuthRoute path="/BookDetails" Component={BookDetails}/>
        <AuthRoute path="/logout" Component={LogOutPopup}/>

      </Switch>
    </Router>
  );
};

export default RouterComponent;
