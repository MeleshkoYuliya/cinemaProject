import React from "react";
import Session from "./Session";
import { connect } from "react-redux";

class MovieSession extends React.Component {
  render() {
    const obj = Object.assign({}, this.props.movies.movies[0]);
    const moviesNow = Object.values(obj);
    let clientId = parseInt(this.props.match.params.id, 8);
    let clientData = moviesNow.find(c => c.id === clientId);
    return (
      <div>
        <Session info={clientData} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const props = {
    movies: state.movies
  };
  return props;
};

export default connect(mapStateToProps)(MovieSession);
