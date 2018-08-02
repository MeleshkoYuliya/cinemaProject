import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import BuyTickets from "../buy-tickets/BuyTickets";

class Films extends React.PureComponent {
  static propTypes = {
    films: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  };

  render() {
    const filmsCode = this.props.films.map(function(item, i) {
      return (
        <div className="home_film" key={item.code}>
          <div className="film_title">
            <h5>{item.name}</h5>
          </div>
          <img className="home__img" src={item.url} alt={item.name} />

          <div>
            <button className="home__button">Treiler</button>
            <Link to="/buy-tickets">
              <button className="home__button">Tickets</button>
            </Link>
          </div>

          <Route path="/buy-tickets" component={BuyTickets} />
        </div>
      );
    });
    return <div className="home">{filmsCode}</div>;
  }
}
export default Films;
