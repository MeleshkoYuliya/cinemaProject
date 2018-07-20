import React from 'react';
import FilmsNow from './FilmsNow';
import FilmsSoon from './FilmsSoon';

class Aside extends React.Component {

// static propTypes = {
// 	city: PropTypes.string.isRequired,
// }
render() {
	return (
		<div className="aside">
		<div className="films-soon">
	  <h4>Coming Soon</h4>
		<FilmsSoon/>
		</div>
		<div className="films-now">
		<h4>Now Showing</h4>
		<FilmsNow/>
		</div>
   </div>
	)
}
}
      
export default Aside;