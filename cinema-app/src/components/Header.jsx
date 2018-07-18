import React from 'react';
import { Link, Route } from 'react-router-dom';
// import BuyTickets from './BuyTickets';
import openmenu from './openmenu.svg';
import closemenu from './closemenu.svg';

class Header extends React.Component {

// static propTypes = {
// 	city: PropTypes.string.isRequired,
// }
render() {
	return (
	
		
<div className="header">
			<h3 className="header__logo">Big cinema</h3>
			<div className="header__menu-button">
        <button className="button menu-button">Movies</button>
        <button className="button menu-button">Cinemas</button>
     <button className="button menu-button">Tickets</button>
				<button className="button menu-button">Deals</button>
	    </div>
		  <div className="header__menu-button--media">		
			  <input type="radio" className="change-menu" name="change-menu" id='close-menu' checked value="2" />
		    <label for='close-menu'>
				<img src={closemenu} className="menu" alt="closemenu" />
				</label>
		    <input type='radio' className='change-menu' name='change-menu' id='open-menu' value="1" />
			  <label for='open-menu'>
				<img src={openmenu} className="menu" alt="openmenu" />
				</label>
				<div class="header__menu-button--burger">
			    <button className="button menu-button">Movies</button>
				  <button className="button menu-button">Cinemas</button>
				  <button className="button menu-button">Tickets</button>
				  <button className="button menu-button">Deals</button>
				  <button className="button menu-button">Coming Soon</button>
				</div>
		  </div>
			</div>
			
	)
	
}
}

export default Header;