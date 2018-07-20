import React from 'react';
import {Link, Route } from 'react-router-dom';
import BuyTickets from './BuyTickets';

class Cinemas extends React.Component {

// static propTypes = {
// 	city: PropTypes.string.isRequired,
// }
render() {
	return (
<div className="cinemas">
  <div className="cinema">
		<div className="cinema__title">
		  <h4 >Arena City Silver Screen</h4>
		  <Link to="/buy-tickets"><button className="button home__button--cinema">Buy Tickets</button></Link></div>
		<div className="cinema__description">
		  <div>Adress: Minsk, Pobediteley ave., 84, SEC ARENAcity, 2-4 floor</div>
		  <div> Description:  
      <div>6 screens</div>
      <div>Comfortable seats</div>
      <div> Exellent sound</div>
      <div>Parking</div>
      <div> Wi-fi</div>
			<div> Conditioner</div></div>
			<div> Phone: +375-29-120-40-09</div>
		</div>
		<div className="cinema__img"> <img src="http://via.placeholder.com/480x360" alt=""/></div>
  </div>
	<div className="cinema">
		<div  className="cinema__title"> 
		  <h4>Velcom Cinema</h4>
		  <Link to="/buy-tickets"><button class="button home__button--cinema">Buy Tickets</button></Link>
	  </div>
		<div className="cinema__description">
		  <div>Adress: Minsk, Petra Mstislavets str., 11. Dana Mall</div>
		  <div> Description:  
      <div>7 screens</div>
      <div>Comfortable seats</div>
      <div> Exellent sound</div>
      <div>Parking</div>
      <div> Wi-fi</div>
			<div> Modern styling</div></div>
			<div> Phone: +375-29-388-13-88</div>
		</div>   
		<div className="cinema__img"> <img src="http://via.placeholder.com/480x360" alt=""/></div>
  </div>
	<div className="cinema">
		<div className="cinema__title">
		  <h4 >Galileo Silver Screen</h4>
		  <Link to="/buy-tickets"><button className="button home__button--cinema">Buy Tickets</button></Link>
		</div>
		<div className="cinema__description">
		  <div>Adress: Minsk, Bobruiskaya str., 6, 5-7th floor</div>
		  <div> Description:  
      <div>7 screens</div>
      <div>Comfortable seats</div>
      <div> Exellent sound</div>
      <div>Parking</div>
      <div> Wi-fi</div>
			<div> Modern styling</div>
			<div>VIP Audience</div>
			<div>Game Zone</div>
			</div>
			<div> Phone: +375-29-388-13-88</div>
		</div>	
		<div className="cinema__img"> <img src="http://via.placeholder.com/480x360" alt=""/></div>      
  </div>
	<div className="cinema">
	  <div className="cinema__title">
		  <h4 >Belarus</h4> 
			<Link to="/buy-tickets"><button className="button home__button--cinema">Buy Tickets</button></Link>
		</div>
		<div className="cinema__description">
		  <div>Adress: Minsk, Romanovskaya Sloboda str., 28</div>
		  <div> Description:  
      <div>5 screens</div>
      <div>Comfortable seats</div>
      <div>Parking</div>
			<div>Game Zone</div>
			</div>
			<div> Phone: +375-17-209-41-82</div>
    </div> 
		<div className="cinema__img"> <img src="http://via.placeholder.com/480x360" alt=""/></div>
  </div>
		<Route path="/buy-tickets" component={BuyTickets}/>
</div>
	)
}
}
export default Cinemas;