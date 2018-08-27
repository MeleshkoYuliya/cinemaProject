import React from "react";
import PropTypes from "prop-types";
import { Route, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import AboutFilmPage from "./AboutFilmPage";

class Films extends React.Component {
  static propTypes = {
    info: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      url: PropTypes.string
    })
  };

  render() {
    return (
      <div className="home_film">
        <div className="film_title">
          <NavLink
            to={"/film/" + this.props.info.id}
            className="film_title_link"
          >
            <h5>{this.props.info.name}</h5>
          </NavLink>
        </div>
        <img
          className="home__img"
          src={this.props.info.url}
          alt={this.props.info.name}
        />
        <div />
        <Route path="/film/:id" component={AboutFilmPage} />
      </div>
    );
  }
}

export default withRouter(Films);
