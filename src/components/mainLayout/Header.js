import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import PagesLinks from "./PagesLinks";
import LinkNotUser from "./LinkNotUser";
import SelectFilms from "./SelectFilms";
import { connect } from "react-redux";
import AuthUserContext from "../Session/AuthUserContext";
import { requestFilms } from "../mainLayout/actions/filmsNow-actions";
import { requestFilmsSoon } from "../mainLayout/actons_filmsSoon/filmsSoon-actions";

const NavigationAuth = () => (
  <div>
    <PagesLinks />
  </div>
);

const NavigationNonAuth = () => (
  <div>
    <LinkNotUser />
  </div>
);

class Header extends PureComponent {
  componentDidMount = () => {
    const { onAddFilms, onAddTodo } = this.props;
    onAddFilms({ ...this.state });
    onAddTodo({ ...this.state });
  };
  render() {
    const obj = Object.assign({}, this.props.movies.movies[0]);
    const moviesNow = Object.values(obj);
    const object = Object.assign({}, this.props.dataSoon.moviesSoon[0]);
    const filmsSoon = Object.values(object);
    return (
      <div>
        <div className="header">
          <Link exact="true" to="/">
            <div className="header__logo">Big cinema</div>
          </Link>
          <div className="header__city" />

          <div className="spacer" />
          <AuthUserContext.Consumer>
            {authUser =>
              authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
          </AuthUserContext.Consumer>
        </div>
        <SelectFilms moviesNow={moviesNow} moviesSoon={filmsSoon} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    dataSoon: state.dataSoon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddFilms: dataSoon => {
      dispatch(requestFilmsSoon(dataSoon));
    },
    onAddTodo: movies => {
      dispatch(requestFilms(movies));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
