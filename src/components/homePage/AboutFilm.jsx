<<<<<<< HEAD
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
=======
import React from 'react';
import PropTypes from 'prop-types';


class AboutFilm extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      treiler:PropTypes.string.isRequired,
      genre:PropTypes.string.isRequired,
      description:PropTypes.string.isRequired,
      duration:PropTypes.string.isRequired,
    }),
  };

  render() {
        return (

        <div className="session-selection">
            <div className="session-selection__film">
              <h4 className="select-options__title">{this.props.info.name}</h4>
              <img className="selection__img" src={this.props.info.url} alt={this.props.info.name} />  
            </div>            
            <div className="session-selection__description">
            <div className="session-selection__text">
            <div><h3>Genre: </h3>{this.props.info.genre}</div>
            <div> <h3>Description:</h3> {this.props.info.description}</div> 
            <div><h3>Duration:</h3> {this.props.info.duration}</div>
          </div>
          <div className="treiler">
            <iframe width="80%" height="340px" src={this.props.info.treiler} title={this.props.info.name} frameBorder="0"  allowFullScreen></iframe>
            </div>
         
            </div>
        </div>
>>>>>>> film
    );
  }
}

<<<<<<< HEAD
export default withRouter(AboutFilm);
=======

export default AboutFilm;
>>>>>>> film
