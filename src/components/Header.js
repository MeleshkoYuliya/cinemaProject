import React from "react";
import SelectCity from "./SelectCity";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PagesLinks from "./PagesLinks";
import SelectFilms from "./SelectFilms";

class Header extends React.Component {
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

  render() {
    return (
      <div>
        <div className="header">
          <div className="headerLogo">
            <Link exact="true" to="/" className="logo">
              <div className="header__logo">Big cinema</div>
            </Link>
            <div className="header__city">
              <SelectCity />
            </div>
          </div>

          <div className="spacer" />
          <PagesLinks />
        </div>
        <SelectFilms
          movies={this.props.movies}
          moviesSoon={this.props.moviesSoon}
          defaultInput={this.props.defaultInput}
        />
      </div>
    );
  }
}

export default Header;
