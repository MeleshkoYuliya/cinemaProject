import React from 'react';
import PropTypes from 'prop-types';
import MovieNow from './MovieNow';

class FilmsNow extends React.PureComponent {

  static propTypes = { 
    films:PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
  };
  
  render() {

    var film_now=this.props.films.map( film_now =>
       <MovieNow key={film_now.code} info={film_now} />
    );

    return (
			  <div className="films-now__flex-conteiner">
          {film_now}
					</div>
    )
    ;

  }

}

export default FilmsNow;