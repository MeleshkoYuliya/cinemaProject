import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import BuyTickets from "../ticketsPage/BuyTickets";
// import SelectSession from "../mainLayout/SelectSession";

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
  state = {
    film: {}
  };

  // handleCreateFilm = e => {
  //   const { films } = this.props;
  //   const { history } = this.props;
  //   const film = films.map((film, index) => film[index] === e.target);
  //   // const film = films.find(film => film === e.target);

  //   if (film) {
  //     // history.push("/select");
  //     this.setState({
  //       film: film.target
  //     });
  //     console.log(this.state.film);
  //   }
  // };
  render() {
    console.log(this.props.films);
    var filmsCode = this.props.films.map((film, index) => {
      return (
        <div className="home_film" key={index}>
          <div className="film_title">
            <h5>{film.name}</h5>
          </div>
          <img className="home__img" src={film.url} alt={film.name} />
          <div>
            <button className="home__button">Treiler</button>
            {/* <button
              className="home__button"
              onClick={e => this.handleCreateFilm(e)}
            >
              Tickets
            </button> */}

            <Link to="/buy-tickets">
              <button className="home__button">Tickets</button>
            </Link>
          </div>
          <Route path="/buy-tickets" component={BuyTickets} />

          {/* <Switch>
            <Route path="/select">
              <SelectSession film={this.state.film} />
            </Route>
          </Switch> */}
        </div>
      );
    });
    return <div className="home">{filmsCode} </div>;
  }
}

export default Films;
