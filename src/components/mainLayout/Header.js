import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PagesLinks from "./PagesLinks";
import SelectFilms from "./SelectFilms";
import { connect } from "react-redux";
import { requestFilms } from "../mainLayout/actions/filmsNow-actions";
import { requestFilmsSoon } from "../mainLayout/actons_filmsSoon/filmsSoon-actions";

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
    console.log(moviesNow)
    return (
      <div>
        <div className="header">
          <Link exact="true" to="/">
            <div className="header__logo">Big cinema</div>
          </Link>
          <div className="header__city" />

          <div className="spacer" />
          <PagesLinks />
        </div>
        <SelectFilms 
          moviesNow={moviesNow}
          moviesSoon={filmsSoon}
        />
      </div>
    );
  }
}

// export default Header;
const mapStateToProps = state => {
  return {
    movies: state.movies,
    dataSoon: state.dataSoon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onCreateFilm: selectMovie => {
    //   dispatch(createFilm(selectMovie));
    // },
    onAddFilms: dataSoon => {
      dispatch(requestFilmsSoon(dataSoon));
    },
    onAddTodo: movies => {
      dispatch(requestFilms(movies));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
