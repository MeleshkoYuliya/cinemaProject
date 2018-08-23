import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Authorisation from "../authorisation/Authorisation";
import Movies_Page from "../moviesPage/Movies_Page";
import ChooseSeats from "../chooseSeatsePage/ChooseSeats";
import BuyTickets from "../ticketsPage/BuyTickets";
import Cinemas_Page from "../cinemasPage/Cinemas_Page";
import SelectSession from "./SelectSession";
import Home_Page from "../homePage/Home_Page";
import Header from "./Header";
import AboutFilm from "../homePage/AboutFilm";
import AccountPage from "../Account/AccountPage";
import withAuthentication from "../Session/withAuthentication";

const MainLayout = () => (

  <Router>
    <div>
      <Header>
      <Route path="/movie/" component={SelectSession} />
      </Header>
      <Route path="/authorisation" component={Authorisation} />
      <Route path="/movies" component={Movies_Page} />
      <Route path="/buy-tickets" component={BuyTickets} />
   
      <Route path="/cinemas" component={Cinemas_Page} />
      <Route path="/choose-seats" component={ChooseSeats} />
     
      <Route exact path="/" component={Home_Page} />
      <Route path="/film/" component={AboutFilm} />
      <Route path="/account" component={AccountPage} />
    </div>
  </Router>
);

export default withAuthentication(MainLayout);
