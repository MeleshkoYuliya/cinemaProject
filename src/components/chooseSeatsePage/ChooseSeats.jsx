import React from 'react';
import withAuthorization from "../Session/withAuthorization";

class ChooseSeats extends React.Component {

	render() {
		return (
      <div>
        <div className="choice-time">Time Left: 15:00</div>
        <div className="room-place">
	        <div className="room-place__seats">
		        <h4>Select your seats</h4>
		        <img className="room-place__seats__img" src="http://premiere-film.ru/images/plan_salsk2.png" alt="план зала"/>
	        </div>	
		      <div className="room-place__select-film">
		        <h4>Your selection</h4>
			      <img className="room-place__select-film__img" src="http://via.placeholder.com/250x360" alt="8 подруг"/>
			      <div>Genre:</div>
			      <div>Age limit:</div>
			      <div> Director:</div>
			      <div>Actors:</div>
		      </div>
	      </div>		 
		  </div>
		)
	}

	}
	const authCondition = authUser => !!authUser;

	export default withAuthorization(authCondition)(ChooseSeats); 

	// export default ChooseSeats;