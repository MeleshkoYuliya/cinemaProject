import React from 'react';
import PropTypes from 'prop-types';

class MovieSoon extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      code: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  };

  render() {

    return (
	
			<div className="films-soon__flex-container__film">
			<h6>{this.props.info.name}</h6>
      <img className="films-soon__flex-container__img" src={this.props.info.url} alt={this.props.info.name}/>		
			</div>
    )
    ;

  }

}

export default MovieSoon;