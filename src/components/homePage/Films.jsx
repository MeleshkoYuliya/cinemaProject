import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import SelectSession from "../mainLayout/SelectSession";
import { withRouter } from "react-router-dom";

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
    film: {},
    id: null
  };
  handleSelectFilm = e => {
    const { films } = this.props;
    const { history } = this.props;
    const movie = films.find(movie => movie.name === e);
    if (movie) {
      // history.push(`/movie/:${movie.id}`);
      this.setState({
        movie: movie.name
      });
      console.log(this.state.film);
    }
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
            {/* <button className="home__button">Treiler</button> */}
            {/* <Link to="/buy-tickets"> */}
            <button
              className="home__button"
              id={film}
              onClick={() => this.handleSelectFilm(film.name)}
            >
              Tickets
            </button>
            {/* </Link> */}
          </div>
          <Switch>
            <Route path={`/movie/:${film.id}`}>
              <SelectSession movie={this.state.movie} />
            </Route>
          </Switch>
          {/* <Route path="/buy-tickets" component={BuyTickets} /> */}
        </div>
      );
    });
    return <div className="home">{filmsCode}</div>;
  }
}

export default withRouter(Films);
