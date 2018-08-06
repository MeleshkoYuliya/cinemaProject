import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";
import Authorisation from "./Authorisation";
import Movies_Page from "./Movies_Page";
import ChooseSeats from "./ChooseSeats";
import BuyTickets from "./BuyTickets";
import Cinemas_Page from "./Cinemas_Page";
import SelectSession from "./SelectSession";

import Home_Page from "./Home_Page";
import Header from "./Header";
let moviesNow = require("./moviesNow.json");
let searchInput = "Search films";

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header movies={moviesNow} defaultInput={searchInput}>
          <Route path="/" component={MainLayout} />
        </Header>
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
export default MainLayout;
