import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import PagesLinks from "./PagesLinks";
import LinkNotUser from "./LinkNotUser";
import SelectFilms from "./SelectFilms";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ToolTip from "react-portal-tooltip";
import AuthUserContext from "../Session/AuthUserContext";
import { requestFilms } from "../mainLayout/actions/filmsNow-actions";
import { requestFilmsSoon } from "../mainLayout/actons_filmsSoon/filmsSoon-actions";
import { style } from "./styleTooltip";
import logo from "./logo.svg";

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
    // const { onAddFilms, onAddTodo } = this.props;
    const { requestFilmsSoon, requestFilms } = this.props;
    // onAddFilms({ ...this.state });
    // onAddTodo({ ...this.state });
    requestFilms();
    requestFilmsSoon();
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
    const { isLoadingSoon } = this.props;
    if (!isLoadingSoon) return <h1>Loading...</h1>;
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
              <img src={logo} className="img-logo" alt="logo" />
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
              <p>Click and move to the Main page</p>
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
    dataSoon: state.dataSoon,
    isLoadingSoon: state.isLoadingSoon
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddFilms: dataSoon => {
//       dispatch(requestFilmsSoon(dataSoon));
//     },
//     onAddTodo: movies => {
//       dispatch(requestFilms(movies));
//     }
//   };
// };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestFilmsSoon: requestFilmsSoon,
      requestFilms: requestFilms
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
