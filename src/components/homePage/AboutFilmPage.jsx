import React from "react";
import AboutFilm from "./AboutFilm";
import { connect } from "react-redux";

class AboutFilmPage extends React.PureComponent {
  render() {
    const obj = Object.assign({}, this.props.movies.movies[0]);
    const moviesNow = Object.values(obj);
    let clientId = parseInt(this.props.match.params.id);
    let clientData = moviesNow.find(c => c.id === clientId);
    return <AboutFilm info={clientData} />;
  }
}

const mapStateToProps = state => {
  const props = {
    movies: state.movies
  };
  return props;
};

export default connect(mapStateToProps)(AboutFilmPage);
