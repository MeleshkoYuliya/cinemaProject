import React from "react";
import FilmsNow from "./FilmsNow";
import FilmsSoon from "./FilmsSoon";
import { connect } from "react-redux";
// import { requestFilms } from "../mainLayout/actions/filmsNow-actions";
// import { requestFilmsSoon } from "../mainLayout/actons_filmsSoon/filmsSoon-actions";

class Movies_Page extends React.Component {
  // componentDidMount = () => {
  //   const { onAddFilms, onAddTodo } = this.props;
  //   onAddFilms({ ...this.state });
  //   onAddTodo({ ...this.state });
  // };

  render() {
    return (
      <div className="movies">
        <div className="films-now">
          <h4>Now Showing</h4>
          <FilmsNow movies={this.props.movies.movies} />
        </div>
        <div className="films-soon">
          <h4>Coming Soon</h4>
          <FilmsSoon moviesSoon={this.props.dataSoon.moviesSoon} />
        </div>
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
const mapStateToProps = state => {
  const props = {
    movies: state.movies,
    dataSoon: state.dataSoon
  }
  return props;
};

export default connect(mapStateToProps)(Movies_Page);
// const mapStateToProps = state => {
//   return {
//     movies: state.movies,
//     dataSoon: state.dataSoon
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Movies_Page);
