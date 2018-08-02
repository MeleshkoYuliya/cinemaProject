import React, { Component } from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import PropTypes from "prop-types";
import "./App.css";
import "./scss/style.scss";
let moviesNow = require("./moviesNow.json");
let moviesSoon = require("./moviesSoon.json");
class App extends Component {
  static propTypes = {
    moviesNow: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ),
    moviesSoon: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  };

  state = {
    moviesSoon: this.props.moviesSoon,
    moviesNow: this.props.moviesNow,
    moviesNames: []
  };
  // props
  // state = {
  //   moviesNow: [{}, {}, {}, {}],
  //   annoncedMovies: [{}, {}, {}, {}],

  //   moviesNames: []
  // };

  render() {
    return (
      <div>
        <Header />
        <Content moviesNow={moviesNow} moviesSoon={moviesSoon} />
      </div>
    );
  }
}

export default App;
