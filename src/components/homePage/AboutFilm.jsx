import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class AboutFilm extends React.Component {
  static propTypes = {
     film: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        url: PropTypes.string
      })
  };
  render() {
    console.log(this.props.film);
    return (
      <div>
        <div className="session-selection">
          <div>
            {/* <div className="session-selection__film">
              <h4 className="select-options__title">{this.props.film.name}</h4>
              <img
                className="selection__img"
                src={this.props.film.url}
                alt={this.props.film.name}
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

export default withRouter(AboutFilm);
