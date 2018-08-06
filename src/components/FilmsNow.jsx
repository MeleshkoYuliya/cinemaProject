import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import BuyTickets from "./BuyTickets";

class FilmsNow extends React.PureComponent {
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
    const film_now = this.props.films.map(function(item, index) {
      return (
        <div className="films-now__flex-conteiner__film" key={index}>
          <h5>{item.name}</h5>
          <img
            className="films-now__flex-container__img"
            src={item.url}
            alt={item.name}
          />

          <div>
            <button className="button films-now__button">Treiler</button>
            <Link to="/buy-tickets">
              <button className="button films-now__button">Tickets</button>
            </Link>
          </div>
          <Route path="/buy-tickets" component={BuyTickets} />
        </div>
      );
    });

    return <div className="films-now__flex-conteiner">{film_now}</div>;
  }
}

export default FilmsNow;
