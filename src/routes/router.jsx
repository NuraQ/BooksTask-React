  
import React from "react";
import {
  Router,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "../containers/Home/Home";
import Header from "../components/NavBar/NavBar";
import LogOutPopup from "../components/LogoutPopup/Logout";
import PurchasedBooks from '../containers/PurchasedBooks/PurchasedBooks';
import BookDetails from '../containers/BookDetails/BookDetails';
import {WithAuth} from '../components/WithAuth/WithAuth'
import AuthRoute from './AuthRoute'
import history from "./history";

const RouterComponent = () => {
  const dispatch = useDispatch();
  return (
    <Router history={history}>
      <Header dispatch={dispatch} isLogged={WithAuth()} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <AuthRoute path="/PurchasedBooks" Component={PurchasedBooks}/>
        <AuthRoute path="/BookDetails" Component={BookDetails}/>
        <AuthRoute path="/Logout" Component={LogOutPopup}/>

      </Switch>
    </Router>
  );
};

export default RouterComponent;
