import React from "react";
import logo from "./img/logo.svg";
import PagesRouter from "./PagesRouter";
import PagesLinks from "./PagesLinks";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">Big cinema</div>
        <div className="header__city">
          <select className="header__change-city">
            <option value="1">Grodno</option>
            <option value="2">Vitebsk</option>
            <option value="3">Mogilev</option>
            <option value="4">Molodechno</option>
            <option value="5">Brest</option>
            <option value="5">Minsk</option>
          </select>
        </div>
        <div className="header__search">
          <input
            className="header__search__inp"
            type="text"
            defaultValue="search"
          />
          <button className="header__search__button">
            <img src={logo} className="App-logo" alt="logo" />
          </button>
        </div>
        <div>
          <PagesLinks />
          <PagesRouter />
        </div>
      </div>
    );
  }
}

export default Header;
