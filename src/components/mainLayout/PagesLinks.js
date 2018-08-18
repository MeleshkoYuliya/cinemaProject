import React from "react";
import { NavLink } from "react-router-dom";
import openmenu from "./openmenu.svg";
import closemenu from "./closemenu.svg";
import user from "./user.svg";
// import SelectCity from "./SelectCity";
import SignOutButton from './SignOut';
import withAuthorization from '../Session/withAuthorization';
import { db } from '../firebase';


class PagesLinks extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
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
  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }
  render() {
    let drawerClasses = "header__menu-button--burger";
    if (this.props.show) {
      drawerClasses = "header__menu-button--burger open";
    }
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
          <SignOutButton />
          {/* <SelectCity /> */}   
          <NavLink to="/account">  
          <img src={user} className="user" alt="closemenu" />
          </NavLink>       
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

        <div className={drawerClasses} show={this.state.sideDrowOpen}>
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
              {/* <button className="menu-button">Coming Soon</button> */}
              <NavLink to="/">
                <button className="menu-button">Home</button>
              </NavLink>
              <NavLink to="/authorisation">
                <button className="menu-button"> Login/Join</button>
              </NavLink>
              {/* <SelectCity /> */}        
            </div>
        
          )}
      
        </div>

      </div>
    );
  }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(PagesLinks);

