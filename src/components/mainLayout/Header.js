import React, { PureComponent } from "react";

import { Link } from "react-router-dom";
import PagesLinks from "./PagesLinks";
import SelectFilms from "./SelectFilms";

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
        <SelectFilms />
      </div>
    );
  }
}

export default Header;
