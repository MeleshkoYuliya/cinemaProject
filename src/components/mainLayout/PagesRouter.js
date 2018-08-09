import React, { Component } from "react";
import { Route } from "react-router-dom";
import Authorisation from "../components/authorisation/Authorisation";
import Movies_Page from "../moviesPage/Movies_Page";
import ChooseSeats from "../chooseSeatsePage/ChooseSeats";
import BuyTickets from "../ticketsPage/BuyTickets";
import Cinemas_Page from "../components/cinemasPage/Cinemas_Page";
import SelectSession from "./SelectSession";
import Home_Page from "../components/homePage/Home_Page";

class PagesRouter extends Component {
  render() {
    return (
      <div>
        <Route path="/authorisation" component={Authorisation} />
        <Route path="/movies" component={Movies_Page} />
        <Route path="/buy-tickets" component={BuyTickets} />
        <Route exact path="/" component={Home_Page} />
        <Route path="/cinemas" component={Cinemas_Page} />
        <Route path="/choose-seats" component={ChooseSeats} />
        <Route path="/select-session" component={SelectSession} />
      </div>
    );
  }
}

export default PagesRouter;
