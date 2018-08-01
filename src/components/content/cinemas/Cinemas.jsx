import React from 'react';
import PropTypes from 'prop-types';
import Cinema from './Cinema';
class Cinemas extends React.Component {

  static propTypes = {
    cinemas:PropTypes.arrayOf(
      PropTypes.shape({
				name: PropTypes.string.isRequired,
				code:  PropTypes.number.isRequired,
				adress: PropTypes.string.isRequired,
				url: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
      })
    ),
  };
  
  render() {

    var cinemasCode=this.props.cinemas.map( cinema =>
      <Cinema key={cinema.code} info={cinema}  />
    );

    return ( 
      <div className='cinemas'>
          {cinemasCode}
        </div>

    )
    ;

  }

}

export default Cinemas;

