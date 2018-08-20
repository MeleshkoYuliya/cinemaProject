import React from "react";
import { Link } from "react-router-dom";
import openmenu from "./openmenu.svg";
import closemenu from "./closemenu.svg";

class LinkNotUser extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: false
    };
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  closeMenu = e => {
    this.setState({ sideDrawOpen: false });
    console.log(e.target);
  };
  render() {
    return (
      <div className="headerMenu">
        <div className="header__menu-button">
          <Link exact="true" to="/">
            <button className="menu-button">Home</button>
          </Link>
          <Link to="/authorisation">
            <button className="menu-button"> Login/Join</button>
          </Link>
        </div>
        <div className="changeMenubtn">
          <button
            className="media-btn__isOpen"
            onClick={this.drawerToggleClickHandler}
          >
            {!this.state.sideDrawerOpen && (
              <img src={openmenu} className="menu" alt="closemenu" />
            )}
          </button>
        </div>

        {this.state.sideDrawerOpen && (
          <div className="header__menu-button--media">
            {this.state.sideDrawerOpen && (
              <button
                className="media-btn__close"
                onClick={this.drawerToggleClickHandler}
              >
                <img src={closemenu} className="menu" alt="openmenu" />
              </button>
            )}
            <Link exact="true" to="/">
              <button className="menu-button">Home</button>
            </Link>
            <Link to="/authorisation">
              <button className="menu-button"> Login/Join</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default LinkNotUser;
