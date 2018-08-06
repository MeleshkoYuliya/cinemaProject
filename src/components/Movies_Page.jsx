import React from "react";

import FilmsNow from "./FilmsNow";
import FilmsSoon from "./FilmsSoon";

let moviesNow = require("./moviesNow.json");
let moviesSoon = require("./moviesSoon.json");
class Movies_Page extends React.Component {
  render() {
    return (
      <div className="movies">
        <div className="films-now">
          <h4>Now Showing</h4>
          <FilmsNow films={moviesNow} />
        </div>
        <div className="films-soon">
          <h4>Coming Soon</h4>
          <FilmsSoon movies={moviesSoon} />
        </div>
      </div>
    );
  }
}
export default Movies_Page;
