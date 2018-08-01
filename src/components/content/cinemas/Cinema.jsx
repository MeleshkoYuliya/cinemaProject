import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import BuyTickets from "../buy-tickets/BuyTickets";
class Cinema extends React.Component {
  static propTypes = {
    info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      code: PropTypes.number.isRequired,
      adress: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired
    })
  };

  render() {
    return (
      <div className="cinema">
        <div className="cinema__title">
          <h4>{this.props.info.name}</h4>
          <Link to="/buy-tickets">
            <button className="home__button--cinema">Buy Tickets</button>
          </Link>
        </div>
        <div className="cinema__description">
          <div>{this.props.info.adress}</div>
          <div>{this.props.info.description}</div>
          <div>{this.props.info.phone}</div>
        </div>
        <div className="cinema__img">
          <img src={this.props.info.url} alt={this.props.info.name} />
        </div>
        <Route path="/buy-tickets" component={BuyTickets} />
      </div>
    );
  }
}

export default Cinema;
