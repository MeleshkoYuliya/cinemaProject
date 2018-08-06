import React from "react";
import SelectCity from "./SelectCity";
import PropTypes from "prop-types";
import { Link, withRouter, Route } from "react-router-dom";
import PagesLinks from "./PagesLinks";
import SelectSession from "./SelectSession";

class Header extends React.Component {
  static propTypes = {
    defaultInput: PropTypes.string.isRequired,
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  };

  state = {
    defaultInput: this.props.defaultInput,
    movies: this.props.movies,
    filmNameArr: this.props.movies.map(film => film.name),
    searchableMovies: []
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

    const { movies } = this.state;
    const { history } = this.props;

    const movie = movies.find(movie => movie.name === name);
    if (movie) {
      history.push(`/movie/:${movie.code}`);
    }
  };

  render() {
    const { movies } = this.state;
    const { searchableMovies } = this.state;
    const movie = movies.find(movie => movie.name);
    const films = searchableMovies.map((name, i) => {
      return (
        <div
          className="searchfilm"
          key={i}
          code={name.code}
          onClick={() => this.handleChooseFilm(name)}
        >
          {name}
        </div>
      );
    });

    return (
      <div className="header">
        <div className="headerLogo">
          <Link exact="true" to="/" className="logo">
            <div className="header__logo">Big cinema</div>
          </Link>

          <form className="header__search">
            {films.length > 0 ? (
              <div className="filmNameSearch">{films}</div>
            ) : null}

            <input
              className="header__search__inp"
              type="text"
              defaultValue={this.state.defaultInput}
              onChange={this.searchChanged}
            />

            {/* <Link to="/select-session">
              <button className="header__search__button">
                <img src={logo} className="App-logo" alt="logo" />
              </button>
            </Link> */}
          </form>

          <SelectCity />
        </div>

        <PagesLinks />
        <Route path={`/movie/:${movie.code}`} component={SelectSession} />
      </div>
    );
  }
}

export default withRouter(Header);
