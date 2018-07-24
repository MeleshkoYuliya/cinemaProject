import React from 'react';
import PropTypes from 'prop-types';

class Film extends React.Component {
	render() {
		return (	
	<div className="films-now__flex-conteiner__film"><img className="films-now__flex-container__img" src="http://via.placeholder.com/250x360" alt="8 подруг"/>
	<div> 
	<button className="button films-now__button">Treiler</button> 
		<Link to="/buy-tickets"><button  className="button films-now__button">Tickets</button></Link>
	</div>
</div>
		)
}
}
export default Film;