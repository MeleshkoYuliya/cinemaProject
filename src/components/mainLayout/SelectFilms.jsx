import React from "react";
import PropTypes from "prop-types";
import { Switch, withRouter, Route } from "react-router-dom";
import SelectSession from "./SelectSession";

class SelectFilms extends React.Component {
  static propTypes = {
    defaultInput: PropTypes.string.isRequired,
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ),
    moviesSoon: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  };

  state = {
    defaultInput: this.props.defaultInput,
    movies: this.props.movies,
    moviesSoon: this.props.moviesSoon,
    filmNameArr: this.props.movies
      .map(film => film.name)
      .concat(this.props.moviesSoon.map(filmSoon => filmSoon.name)),
    searchableMovies: [],
    id: this.props.id
  };

  searchChanged = e => {
    const { filmNameArr } = this.state;

    if (!e.target.value) {
      this.setState({ searchableMovies: [] });
      return;
    }

    const searchableMovies = filmNameArr.filter(film =>
      film.toLowerCase().startsWith(e.target.value.toLowerCase())
    );

    this.setState({ searchableMovies });
  };

  handleChooseFilm = name => {
    console.log(name);

    const { movies, moviesSoon } = this.state;
    const { history } = this.props;

    const movie = movies.find(movie => movie.name === name);
    const movieSoon = moviesSoon.find(movie => movie.name === name);
    if (movie) {
      history.push(`/movie/:${movie.id}`);
    }
    if (movieSoon) {
      history.push(`/movie/:${movieSoon.id}`);
    }
  };

  render() {
    const { movies, moviesSoon } = this.state;
    const { searchableMovies } = this.state;
    const movie = movies.find(movie => movie.name);
    const movieSoon = moviesSoon.find(movie => movie.name);
    const films = searchableMovies.map((name, i) => {
      return (
        <div
          className="searchfilm"
          key={i}
          id={name.id}
          onClick={() => this.handleChooseFilm(name)}
        >
          {name}
        </div>
      );
    });
    return (
      <div>
        <form className="header__search">
          {films.length > 0 ? (
            <div className="filmNameSearch">{films}</div>
          ) : null}

          <input
            className="header__search__inp"
            type="text"
            defaultValue={this.state.defaultInput}
            placeholder="Search films"
            onChange={this.searchChanged}
          />
        </form>

        <Switch>
          <Route path={`/movie/:${movie.id}`} component={SelectSession} />
          <Route path={`/movie/:${movieSoon.id}`} component={SelectSession} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(SelectFilms);
