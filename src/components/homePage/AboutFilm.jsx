import React from "react";
import { withRouter } from "react-router-dom";

class AboutFilm extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <div>
        <div className="session-selection">
          <div>
            {/* <div className="session-selection__film">
              <h4 className="select-options__title">{movie.name}</h4>
              <img
                className="selection__img"
                src={movie.url}
                alt={movie.name}
              />
            </div> */}

            <div>Genre:</div>
            <div>Age limit:</div>
            <div> Director:</div>
            <div>Actors:</div>
            <div> Description:</div>
            <div>
              <button className="button session-selection__button">
                View Treiler
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutFilm;
