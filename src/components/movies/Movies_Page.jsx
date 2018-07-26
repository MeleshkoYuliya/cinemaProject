import React from 'react';
import moviesArr from '../home/moviesArr';
import films_soonArr from './films_soonArr';
import FilmsNow from './FilmsNow';
import FilmsSoon from './FilmsSoon';

class Movies_Page extends React.Component {

render() {
	return (
		<div className="movies">
		<div className="films-now">
	  <h4>Now Showing</h4>
      <FilmsNow  films={moviesArr.moviesArr}/>
			</div>
			<div className="films-soon">
	  <h4>Coming Soon</h4>
		<FilmsSoon movies={films_soonArr.films_soonArr}/>
		</div>
			</div>
	)
}
}
export default  Movies_Page;