import React, { PureComponent } from "react";

import { Link } from "react-router-dom";
import PagesLinks from "./PagesLinks";
import SelectFilms from "./SelectFilms";
import { connect } from "react-redux";
import { requestFilms } from "../mainLayout/actions/filmsNow-actions";
import { requestFilmsSoon } from "../mainLayout/actons_filmsSoon/filmsSoon-actions";
// let moviesNow = require("../moviesNow.json");
// let moviesSoon = require("../moviesSoon.json");
let searchInput = "Search films";

class Header extends PureComponent {
  // componentDidMount = () => {
  //   const { onAddFilms, onAddTodo } = this.props;
  //   onAddFilms({ ...this.state });
  //   onAddTodo({ ...this.state });
  // };

  render() {
    // const obj = Object.assign({}, this.props.movies.movies[0]);
    // const moviesNow = Object.values(obj);
    // const object = Object.assign({}, this.props.dataSoon.moviesSoon[0]);
    // const filmsSoon = Object.values(object);
    // const filmNameArr = moviesNow
    //   .map(film => film.name)
    //   .concat(filmsSoon.map(filmSoon => filmSoon.name));
    // console.log(filmNameArr);
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
          defaultInput={searchInput}
          // movies={moviesNow}
          // moviesSoon={filmsSoon}
          // filmNameArr={filmNameArr}
        />
      </div>
    );
  }
}
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

// const mapStateToProps = state => {
//   return {
//     movies: state.movies,
//     dataSoon: state.dataSoon
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Header);

export default Header;
