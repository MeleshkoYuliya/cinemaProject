import React from "react";
import Select from "react-select";
import logo from "./logo.svg";
import PropTypes from "prop-types";
import { Link, withRouter, Route, Switch, Router } from "react-router-dom";
import PagesLinks from "./PagesLinks";
import SelectSession from "./SelectSession";
import Session from "./Session";
const options = [
  { value: "1", label: "Grodno" },
  { value: "2", label: "Vitebsk" },
  { value: "3", label: "Mogilev" },
  { value: "4", label: "Molodechno" },
  { value: "5", label: "Brest" },
  { value: "6", label: "Minsk" }
];
class Header extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired
      })
    ),
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
    selectedOption: null,
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

  handleChooseFilm = e => {
    const { movies } = this.state;
    const { history } = this.props;

    const movie = movies.find(movie => movie.name === e.target.value);
    if (movie) {
      history.push(`/movie/:${movie.name}`);
    }
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    let city = document.querySelector(".city");
    city.innerHTML = selectedOption.label;
  };

  render() {
    const { selectedOption, searchableMovies } = this.state;

    const films = searchableMovies.map((name, i) => {
      return (
        <div className="searchfilm" key={i} code={name.code}>
          {name}
        </div>
      );
    });

    return (
      <div className="header">
        <Link exact="true" to="/" className="logo">
          <div className="header__logo">Big cinema</div>
        </Link>
        <div className="header__city">
          <div className="city" />
          <Select
            className="header__change-city"
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        </div>

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

          <Link to="/select-session">
            <button className="header__search__button">
              <img src={logo} className="App-logo" alt="logo" />
            </button>
          </Link>
        </form>
        {/* <Route path={`${match.url}/:movieId`} render={ (props) => <Session data= {searchableMovies} {...props} />}/>
    <Route exact path={match.url} 
      render={() => (
        <div style={{ textAlign:'center'}}>Please select a product.</div>
    )}/> */}
        <PagesLinks />
      </div>
    );
  }
}

export default withRouter(Header);
