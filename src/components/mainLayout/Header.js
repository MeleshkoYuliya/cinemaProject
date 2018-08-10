import React, { PureComponent } from "react";

import { Link } from "react-router-dom";
import PagesLinks from "./PagesLinks";
import SelectFilms from "./SelectFilms";
let moviesNow = require("../moviesNow.json");
let moviesSoon = require("../moviesSoon.json");
let searchInput = "Search films";
class Header extends PureComponent {
  render() {
    return (
      <div>
        <div className="header">
          <Link exact="true" to="/">
            <div className="header__logo">Big cinema</div>
          </Link>
          <div className="header__city" />

          <div className="spacer" />
          <PagesLinks />
        </div>
        <SelectFilms
          movies={moviesNow}
          moviesSoon={moviesSoon}
          defaultInput={searchInput}
        />
      </div>
    );
  }
}

export default Header;
