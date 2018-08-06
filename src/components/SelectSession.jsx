import React from "react";
import { Link } from "react-router-dom";
import Session from "./Session";
// import PropTypes from "prop-types";
let moviesNow = require("./moviesNow.json");

class SelectSession extends React.Component {
  render() {
    let movieCode = this.props.match.params.movieId;
    const MovieSession = this.props.movies.find(c => c.code === movieCode);
    return (
      <div>
        <Session>{MovieSession}</Session>
        {/* /*  */}
      </div>
    );
  }
}

export default SelectSession;
