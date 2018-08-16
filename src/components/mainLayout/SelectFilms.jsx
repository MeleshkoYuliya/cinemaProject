import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import SelectSession from "./SelectSession";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestFilms } from "../mainLayout/actions/filmsNow-actions";
import { requestFilmsSoon } from "../mainLayout/actons_filmsSoon/filmsSoon-actions";
import PropTypes from "prop-types";
import { createFilm } from "./header_actions/actions";

class SelectFilms extends React.Component {
  // static propTypes = {
  //   movies: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       name: PropTypes.string.isRequired,
  //       url: PropTypes.string.isRequired
  //     })
  //   ),
  //   moviesSoon: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       name: PropTypes.string.isRequired,
  //       url: PropTypes.string.isRequired
  //     })
  //   )
  // };
  state = {
    defaultInput: this.props.defaultInput,
    // movies: this.props.movies,
    // moviesSoon: this.props.moviesSoon,
    // filmNameArr: this.props.movies
    //   .map(film => film.name)
    //   .concat(this.props.moviesSoon.map(filmSoon => filmSoon.name)),
    filmNameArr: [],
    searchableMovies: [],
    movie: this.props.movie
  };
  // componentDidMount = () => {
  //   const { onCreateFilm } = this.props;
  //   onCreateFilm({ ...this.state });
  // };

  searchChanged = e => {
    // let { filmNameArr } = this.state;
    // console.log(this.props.filmNameArr);
    const filmNameArr = this.props.movies
      .map(film => film.name)
      .concat(this.props.moviesSoon.map(filmSoon => filmSoon.name));
    if (!e.target.value) {
      this.setState({ searchableMovies: [] });
      return;
    }

    const searchableMovies = filmNameArr.filter(film =>
      film.toLowerCase().startsWith(e.target.value.toLowerCase())
    );

    this.setState({ searchableMovies });
  };

  handleCreateFilm = e => {
    const { moviesSoon } = this.props;
    const { movies } = this.props;
    const { history } = this.props;
    const movie = movies.find(movie => movie.name === e);
    const movieSoon = moviesSoon.find(movieSoon => movieSoon.name === e);
    if (movie) {
      history.push(`/movie/:${movie.id}`);
      this.setState({
        movie: movie
      });
    }
    if (movieSoon) {
      history.push(`/movie/:${movieSoon.id}`);
      this.setState({
        movie: movieSoon
      });
    }
    const { onCreateFilm } = this.props;
    onCreateFilm({ ...this.state });
  };
  render() {
    const { movie, movies, moviesSoon } = this.state;
    const { searchableMovies } = this.state;
    // let { filmNameArr } = this.props;
    // console.log(filmNameArr);
    // const movie = movies.find(movie => movie.name);
    // const movieSoon = moviesSoon.find(movie => movie.name);
    const films = searchableMovies.map((name, i) => {
      return (
        <div
          className="searchfilm"
          key={i}
          id={name.id}
          onClick={() => this.handleCreateFilm(name)}
        >
          {name}
        </div>
      );
    });
    return (
      <div>
        <form className="header__search">
          {films.length > 0 ? (
            <div className="filmNameSearch">{films}</div>
          ) : null}

          <input
            className="header__search__inp"
            type="text"
            defaultValue={this.state.defaultInput}
            placeholder="Search films"
            onChange={this.searchChanged}
          />
        </form>
        <Switch>
          <Route path={`/movie/:${movie.id}`}>
            <SelectSession movie={this.state.movie} />
          </Route>
        </Switch>
      </div>
    );
  }
}
// export default withRouter(SelectFilms);

const mapStateToProps = state => {
  return {
    movie: state.movie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateFilm: movie => {
      dispatch(createFilm(movie));
    }
    // onAddFilms: dataSoon => {
    //   dispatch(requestFilmsSoon(dataSoon));
    // },
    // onAddTodo: movies => {
    //   dispatch(requestFilms(movies));
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SelectFilms));

// export default withRouter(SelectFilms);
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
// )(withRouter(SelectFilms));
