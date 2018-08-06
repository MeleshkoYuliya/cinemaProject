import React from "react";
import { NavLink } from "react-router-dom";
import openmenu from "./openmenu.svg";
import closemenu from "./closemenu.svg";
import SelectCity from "./SelectCity";
class PagesLinks extends React.PureComponent {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="headerMenu">
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
          <NavLink to="/authorisation">
            <button className="menu-button"> Login/Join</button>
          </NavLink>
        </div>

        <div className="header__menu-button--media">
          <button className="media-btn__isOpen" onClick={this.toggle}>
            {this.state.isOpen ? (
              <img src={closemenu} className="menu" alt="openmenu" />
            ) : (
              <img src={openmenu} className="menu" alt="closemenu" />
            )}
          </button>

          {this.state.isOpen && (
            <div className="header__menu-button--burger">
              <NavLink to="/cinemas">
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
              <NavLink to="/authorisation">
                <button className="menu-button"> Login/Join</button>
              </NavLink>
              <SelectCity />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PagesLinks;
