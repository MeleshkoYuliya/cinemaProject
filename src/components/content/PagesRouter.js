import React from "react";
import { Route } from "react-router-dom";
import Authorisation from "./autorisation/Authorisation";
import Movies_Page from "./movies/Movies_Page";
import ChooseSeats from "./choose-seats/ChooseSeats";
import BuyTickets from "./buy-tickets/BuyTickets";
import Cinemas_Page from "./cinemas/Cinemas_Page";
import Home_Page from "./home/Home_Page";

class PagesRouter extends React.Component {
  render() {
    return (
      <div>
        <Route path="/authorisation" component={Authorisation} />
        <Route path="/movies" component={Movies_Page} />
        <Route path="/buy-tickets" component={BuyTickets} />
        <Route exact path="/" component={Home_Page} />
        <Route path="/cinemas" component={Cinemas_Page} />
        <Route path="/choose-seats" component={ChooseSeats} />
      </div>
    );
  }
}

export default PagesRouter;
