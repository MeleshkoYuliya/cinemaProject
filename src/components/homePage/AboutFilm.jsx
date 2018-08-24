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
    );
  }
}


export default AboutFilm;
