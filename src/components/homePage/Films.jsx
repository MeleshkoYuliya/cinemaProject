import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import BuyTickets from "../ticketsPage/BuyTickets";

class Films extends React.Component {
  static propTypes = {
    films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        url: PropTypes.string
      })
    )
  };

  render() {
    var filmsCode = this.props.films.map((film, index) => {
      return (
        <div className="home_film" key={index}>
          <div className="film_title">
            <h5>{film.name}</h5>
          </div>
          <img className="home__img" src={film.url} alt={film.name} />
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
