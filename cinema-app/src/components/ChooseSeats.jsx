import React from 'react';

class ChooseSeats extends React.Component {
	//  static propTypes = {
	// 	url: PropTypes.string.isRequired,
	//  }
	render() {
		return (
      <div>
        <div class="choice-time">Time Left: 15:00</div>
        <div className="room-place">
	        <div className="room-place__seats">
		        <h4>Select your seats</h4>
		        <img className="room-place__seats__img" src="plan.png" alt="план зала"/>
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

	export default ChooseSeats;