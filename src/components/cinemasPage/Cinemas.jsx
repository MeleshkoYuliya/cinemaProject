import React from "react";
import { Link, Route } from "react-router-dom";
import BuyTickets from "../ticketsPage/BuyTickets";

class Cinemas extends React.Component {
  render() {
    const cinema = this.props.cinemas.map(function(item, index) {
      return (
        <div className="cinema" key={index}>
          <div className="cinema__title">
            <h4>{item.name}</h4>
            <Link to="/buy-tickets">
              <button className="home__button--cinema">Buy Tickets</button>
            </Link>
          </div>
          <div className="cinema__description">
            <div>{item.adress}</div>
            <div>{item.description}</div>
            <div>{item.phone}</div>
          </div>
          <div className="cinema__img">
            <img src={item.url} alt={item.name} />
          </div>
          <Route path="/buy-tickets" component={BuyTickets} />
        </div>
      );
    });

    return <div className="cinemas">{cinema}</div>;
  }
}

export default Cinemas;
