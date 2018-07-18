import React from 'react';


class BuyTickets extends React.Component {

// static propTypes = {
// 	city: PropTypes.string.isRequired,
// }
render() {
	return (
		<div>
		<div class="select-options">
		<select name='cinemas' class="select-options__cinemas">
			<option value="1">Cinemas:</option>
			<option value="2">Arena City</option>
			<option value="3">Velcom cinema</option>
			<option value="4">Moscow</option>
			<option value="5">Kiev</option>
			<option value="6">Galileo</option>
		</select>
		<select name='date' class="select-options__date">
			<option value="1">Today, 10 July</option>
			<option value="2">Tomorrow, 11 July</option>
			<option value="3">Wednesday, 12 July</option>
			<option value="4">Thursday, 13 July</option>
			<option value="5">Fridayб 14 July</option>
		</select> 
		<select name='session-type' class="select-options__session-type">
			<option value="1">VMAX</option>
			<option value="2">Dolby Digital</option>
			<option value="4">3D</option>
			<option value="5">2D</option>
		</select> 
  </div>

  <div class="session-selection">
    <div class="session-selection__film">
		<h4 class="select-options__title">Movie title</h4>
		<img class="session-selection__img" src="http://via.placeholder.com/250x360" alt="8 подруг"/>
      <div>Genre:</div>
      <div>Age limit:</div>
      <div> Director:</div>
      <div>Actors:</div>
      <div> Description:</div>
      <div> <button class="button session-selection__button">View Treiler</button></div>
    </div>
    <div class="session-selection__showing">
     
      <div class="showing__place">
				<h5>Arena City </h5>
				<div class="showing__place__screening"> 
					<div>time</div>
					<div> Session Type:</div>
					<div> room: </div>
				</div>
				<div class="showing__place__screening"> 
					<div>time</div>
					<div> Session Type:</div>
				  <div> room: </div>
				</div>
      </div>
      <div class="showing__place">
				<h5>Velcom cinema </h5>
				<div class="showing__place__screening"> 
					<div>time</div>
					<div> Session Type:</div>
					<div> room: </div>
				</div>
				<div class="showing__place__screening"> 
					<div>time</div>
					<div> Session Type:</div>
					<div> room: </div>
				</div>
      </div>
      <div class="showing__place">
				<h5>Kiev</h5>
				<div class="showing__place__screening"> 
				  <div>time</div>
					<div> Session Type:</div>
					<div> room: </div>
				</div>
      </div>
      <div class="showing__place">
				<h5>Galileo</h5>
					<div class="showing__place__screening"> 
						<div>time</div>
						<div> Session Type:</div>
						<div> room: </div>
					</div>
					<div class="showing__place__screening"> 
						<div>time</div>
						<div> Session Type:</div>
						<div> room: </div>
				  </div>
      </div>
    </div>
		</div>
		<div class="session-selection">
    <div class="session-selection__film">
		<h4 class="select-options__title">Movie title</h4>
		<img class="session-selection__img" src="http://via.placeholder.com/250x360" alt="8 подруг"/>
      <div>Genre:</div>
      <div>Age limit:</div>
      <div> Director:</div>
      <div>Actors:</div>
      <div> Description:</div>
      <div> <button class="button session-selection__button">View Treiler</button></div>
    </div>
    <div class="session-selection__showing">
      <div class="showing__place">
				<h5>Galileo Silver Screen</h5>
				<div class="showing__place__screening"> 
					<div>time</div>
					<div> Session Type:</div>
					<div> room: </div>
				</div>
				<div class="showing__place__screening"> 
					<div>time</div>
					<div> Session Type:</div>
					<div> room: </div>
				</div>
				<div class="showing__place__screening"> 
					<div>time</div>
					<div> Session Type:</div>
					<div> room: </div>
				</div>
      </div>
      <div class="showing__place">
				<h5>Moscow</h5>
				<div class="showing__place__screening"> 
					<div>time</div>
					<div> Session Type:</div>
					<div> room: </div>
				</div>
      </div>
      <div class="showing__place">
				<h5>Galileo</h5>
					<div class="showing__place__screening"> 
						<div>time</div>
						<div> Session Type:</div>
						<div> room: </div>
					</div>
					<div class="showing__place__screening"> 
						<div>time</div>
						<div> Session Type:</div>
						<div> room: </div>
				  </div>
      </div>
    </div>
		</div>
		</div>

	)
}
}
      
export default BuyTickets;