import React from 'react';
import PropTypes from 'prop-types';
import MovieSoon from './MovieSoon';

class FilmsSoon extends React.PureComponent {

  static propTypes = { 
    movies:PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
  };
  
  render() {

    var film_soon=this.props.movies.map( film_soon =>
       <MovieSoon key={film_soon.code} info={film_soon} />
    );

    return (
			  <div className="films-soon__flex-container">
          {film_soon}
					</div>
    )
    ;

  }

}

export default FilmsSoon;
	// 	<div className="films-soon__flex-container">
	// 	<div className="films-soon__flex-container__film"> <img className="films-soon__flex-container__img" src="http://via.placeholder.com/250x360" alt="Зои"/>
	// 		<div className="description-film">Жанры: Мелодрама, Фантастика
	// 			<div>Возрастное ограничение: Зрителям, достигшим возраста 16 лет</div>
	// 			<div>В кинотеатрах с: 19.07.2018</div>
	// 			<div> Длительность фильма: 1 ч. 50</div>
	// 			<div>Режиссёр: Дрейк Доримус</div>
	// 			<div>Актёры: Леа Сейду, Юэн МакГрегор, Тео Джеймс</div>
	// 			<div>Романтическая история о сотрудниках научно-исследовательской лаборатории, которые работают над революционной технологией, помогающей создавать идеальные отношения внутри пары. Но чем дальше герои заходят в своих разработках,
	// 					 тем сложнее и удивительнее становятся их открытия.</div>
	// 		</div>

	// 	</div>
	
	// </div>
