import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import PagesLinks from "./PagesLinks";
import LinkNotUser from "./LinkNotUser";
import SelectFilms from "./SelectFilms";
import { connect } from "react-redux";
import ToolTip from "react-portal-tooltip";
import AuthUserContext from "../Session/AuthUserContext";
import { requestFilms } from "../mainLayout/actions/filmsNow-actions";
import { requestFilmsSoon } from "../mainLayout/actons_filmsSoon/filmsSoon-actions";
import { style } from "./styleTooltip";

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
  constructor(props) {
    super(props);

    this.state = {
      isTooltipActive: false
    };
  }
  componentDidMount = () => {
    const { onAddFilms, onAddTodo } = this.props;
    onAddFilms({ ...this.state });
    onAddTodo({ ...this.state });
  };
  showTooltip() {
    this.setState({ isTooltipActive: true });
  }
  hideTooltip() {
    this.setState({ isTooltipActive: false });
  }
  render() {
    const obj = Object.assign({}, this.props.movies.movies[0]);
    const moviesNow = Object.values(obj);
    const object = Object.assign({}, this.props.dataSoon.moviesSoon[0]);
    const filmsSoon = Object.values(object);
    return (
      <div>
        <div className="header">
          <Link exact="true" to="/">
            <div
              className="header__logo"
              id="logo"
              onMouseEnter={this.showTooltip.bind(this)}
              onMouseLeave={this.hideTooltip.bind(this)}
            >
              Big cinema
            </div>
          </Link>
          <ToolTip
            active={this.state.isTooltipActive}
            position="right"
            arrow="center"
            parent="#logo"
            className="toolTip"
            style={style}
          >
            <div>
              <p>Move to the main page</p>
            </div>
          </ToolTip>
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
