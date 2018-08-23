import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Link } from "react-router-dom";
import AboutFilm from "./AboutFilm";
import { withRouter } from "react-router-dom";

class Films extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    cbSelected: PropTypes.func.isRequired,
    selectedFilmId: PropTypes.number,
    selectedFilmName: PropTypes.string,
    selectedFilmUrl: PropTypes.string
  };

  filmClicked = EO => {
    this.props.cbSelected(this.props.id, this.props.name, this.props.url);
  };

  state = {
    id: this.props.selectedFilmId,
    name: this.props.selectedFilmName,
    url: this.props.selectedFilmUrl
  };
  // handleSelectFilm = e => {
  //   const { films } = this.props;
  //   const { history } = this.props;
  //   const movie = films.find(movie => movie.name === e);
  //   if (movie) {
  //     // history.push(`/movie/:${movie.id}`);
  //     this.setState({
  //       movie: movie.name
  //     });
  //     console.log(this.state.film);
  //   }
  // };

  render() {
    // const { selectedFilmId, id } = this.props;
    // console.log(this.props.selectedFilmId, this.props.selectedFilmName);
    return (
      <div className="home_film">
        <div className="film_title">
          <h5>{this.props.name}</h5>
        </div>
        <img className="home__img" src={this.props.url} alt={this.props.name} />
        <div>
          {/* <button className="home__button">Treiler</button> */}
          {/* <Link to="/about"> */}
          <button
            className="home__button"
            // id={film}
            onClick={this.filmClicked}
          >
            Tickets
          </button>
          {/* </Link> */}
        </div>
        {/* <Switch>
          <Route path="/about">
            <AboutFilm selectedFilm={this.state.selectedFilm} />
          </Route>
        </Switch> */}
        {/* <Route path="/buy-tickets" component={BuyTickets} /> */}
        {/* <Switch>
          <Route path={`/film/:${id}`}>
            <AboutFilm
              id={this.props.id}
              name={this.props.name}
              url={this.props.url}
            />
          </Route>
        </Switch> */}
        <Switch>
          <Route path={`/film/:${this.props.selectedFilmId}`}>
            <AboutFilm
              id={this.state.id}
              name={this.state.name}
              url={this.state.url}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Films);
// {`/movie/:${film.id}`}
