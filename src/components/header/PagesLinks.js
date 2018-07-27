import React from "react";
import { NavLink } from "react-router-dom";
import openmenu from "./img/openmenu.svg";
import closemenu from "./img/closemenu.svg";

class PagesLinks extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/authorisation">
          <button className="header__login-button ">Login/Join</button>
        </NavLink>
        <div className="header__menu-button">
          <NavLink to="/cinemas">
            <button className="menu-button">Cinemas</button>
          </NavLink>
          <NavLink to="/movies" activeClassName="ActivePageLink">
            <button className="menu-button">Movies</button>
          </NavLink>
          <NavLink to="/buy-tickets">
            <button className="menu-button">Tickets</button>
          </NavLink>
          <NavLink exact to="/">
            <button className="menu-button">Home</button>
          </NavLink>
        </div>
        <div className="header__menu-button--media">
          <input
            type="radio"
            className="change-menu"
            name="change-menu"
            id="close-menu"
            checked
            value="2"
          />
          <label htmlFor="close-menu">
            <img src={closemenu} className="menu" alt="closemenu" />
          </label>
          <input
            type="radio"
            className="change-menu"
            name="change-menu"
            id="open-menu"
            value="1"
          />
          <label htmlFor="open-menu">
            <div className="open-menu__title">Menu</div>
            <img src={openmenu} className="menu" alt="openmenu" />
          </label>
          <div className="header__menu-button--burger">
            <NavLink to="/cinemas" activeClassName="ActivePageLink">
              <button className="menu-button">Cinemas</button>
            </NavLink>
            <NavLink to="/movies">
              <button className="menu-button">Movies</button>
            </NavLink>
            <NavLink to="/buy-tickets">
              <button className="menu-button">Tickets</button>
            </NavLink>
            <button className="menu-button">Coming Soon</button>
            <NavLink to="/">
              <button className="menu-button">Home</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default PagesLinks;
