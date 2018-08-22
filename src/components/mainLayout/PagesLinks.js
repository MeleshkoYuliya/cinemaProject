import React from "react";
import { NavLink } from "react-router-dom";
import openmenu from "./openmenu.svg";
import closemenu from "./closemenu.svg";
import user from "./user.svg";
import withAuthorization from "../Session/withAuthorization";
import { auth } from "../firebase";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import JwModal from "jw-react-modal";
import { customStyles } from "./modalWindowStyle";
import ToolTip from "react-portal-tooltip";
import { style } from "./styleTooltip";

class PagesLinks extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
      sideDrawerOpen: false,
      isTooltipActive: false
    };
  }

  showTooltip() {
    this.setState({ isTooltipActive: true });
  }
  hideTooltip() {
    this.setState({ isTooltipActive: false });
  }

  drawerToggleClickHandler = () => {
    this.setState({
      sideDrawerOpen: !this.state.sideDrawerOpen
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
          <button
            className="menu-button"
            type="button"
            onClick={JwModal.open("custom-modal-2")}
          >
            Sign Out
          </button>
          <JwModal id="custom-modal-2" style={customStyles}>
            <h5>You will not be able to use the services! Are you sure?</h5>

            <button className="modal-button" onClick={auth.doSignOut}>
              Yes
            </button>
            <button
              className="modal-button"
              onClick={JwModal.close("custom-modal-2")}
            >
              No
            </button>
          </JwModal>
          <NavLink to="/account">
            <img
              src={user}
              className="user"
              alt="closemenu"
              id="User"
              onMouseEnter={this.showTooltip.bind(this)}
              onMouseLeave={this.hideTooltip.bind(this)}
            />
          </NavLink>
          <ToolTip
            active={this.state.isTooltipActive}
            position="left"
            arrow="center"
            parent="#User"
            className="toolTip"
            style={style}
          >
            <div>
              <p> Go to your account</p>
            </div>
          </ToolTip>
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
          <ReactCSSTransitionGroup
            transitionName="ex"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
          >
            <div className="header__menu-button--media">
              {this.state.sideDrawerOpen && (
                <button
                  className="media-btn__close"
                  onClick={this.drawerToggleClickHandler}
                >
                  <img src={closemenu} className="menu" alt="openmenu" />
                </button>
              )}

              <NavLink to="/account">
                <img src={user} className="user" alt="closemenu" />
              </NavLink>
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
              <button
                className="menu-button"
                type="button"
                onClick={JwModal.open("custom-modal-2")}
              >
                Sign Out
              </button>
            </div>
          </ReactCSSTransitionGroup>
        )}
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(PagesLinks);
