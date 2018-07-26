import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Authorisation from "../autorisation/Authorisation";
import Movies_Page from "../movies/Movies_Page";
import ChooseSeats from "../choose-seats/ChooseSeats";
import BuyTickets from "../buy-tickets/BuyTickets";
import Cinemas_Page from "../cinemas/Cinemas_Page";
import Home_Page from "../home/Home_Page";
import openmenu from "./openmenu.svg";
import closemenu from "./closemenu.svg";
import logo from "./logo.svg";
import PropTypes from "prop-types";

// const options = [
//   { value: '1', label: 'Grodno' },
//   { value: '2', label: 'Vitebsk' },
// 	{ value: '3', label: 'Mogilev' },
// 	{ value: '4', label: 'Molodechno' },
// 	{ value: '5', label: 'Brest' },
// 	{ value: '6', label: 'Minsk' }
// ];
class Header extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired
      })
    )
  };
  render() {
    return (
      <div className="header">
        <div className="header__logo">Big cinema</div>
        <div className="header__city">
          <select className="header__change-city">
            <option>{this.props.label}</option>
          </select>
        </div>
        <div className="header__search">
          <input
            className="header__search__inp"
            type="text"
            defaultValue="search"
          />
          <button className="button header__search__button">
            <img src={logo} className="App-logo" alt="logo" />
          </button>
        </div>
        <NavLink to="/authorisation">
          <button className="button header__login-button ">Login/Join</button>
        </NavLink>
        <div className="header__menu-button">
          <NavLink to="/cinemas">
            <button className="button menu-button">Cinemas</button>
          </NavLink>
          <NavLink to="/movies" activeClassName="ActivePageLink">
            <button className="button menu-button">Movies</button>
          </NavLink>
          <NavLink to="/buy-tickets">
            <button className="button menu-button">Tickets</button>
          </NavLink>
          <NavLink exact="true" to="/">
            <button className="button menu-button">Home</button>
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
              <button className="button menu-button">Cinemas</button>
            </NavLink>
            <NavLink to="/movies">
              <button className="button menu-button">Movies</button>
            </NavLink>
            <NavLink to="/buy-tickets">
              <button className="button menu-button">Tickets</button>
            </NavLink>
            <button className="button menu-button">Coming Soon</button>
            <NavLink to="/">
              <button className="button menu-button">Home</button>
            </NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/authorisation" component={Authorisation} />
          <Route path="/movies" component={Movies_Page} />
          <Route path="/buy-tickets" component={BuyTickets} />
          <Route exact path="/" component={Home_Page} />
          <Route path="/cinemas" component={Cinemas_Page} />
          <Route path="/choose-seats" component={ChooseSeats} />
        </Switch>
      </div>
    );
  }
}

export default Header;
