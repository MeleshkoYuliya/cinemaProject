import React from 'react';
import {Link, Route } from 'react-router-dom';
import Authorisation from './Authorisation';
import Movies from './Movies';
import ChooseSeats from './ChooseSeats';
import BuyTickets from './BuyTickets';
import Cinemas from './Cinemas';
import Home from './Home';
import openmenu from './openmenu.svg';
import closemenu from './closemenu.svg';
import logo from './logo.svg';


class Upheader extends React.Component {

// static propTypes = {
// 	city: PropTypes.string.isRequired,
// }
render() {
	return (
		<div className="header">
			<div className="header__logo">Big cinema</div>
			<div className="header__city">Minsk	
	      <select name='city' className="header__change-city">
	        <option value="0">Change city</option>
				  <option value="1">Vitebsk</option>
				  <option value="2">Grodno</option>
				  <option value="3">Mogilev</option>
				  <option value="4">Molodechno</option>
				  <option value="5">Brest</option>
	      </select> 
      </div>
      <div className="header__search">
			  <input className="header__search__inp" type="text" defaultValue="search" />
			  <button className="button header__search__button">
			    <img src={logo} className="App-logo" alt="logo" /></button> 
			</div>
			<Link to="/authorisation">
				<button className="button header__login-button ">Login/Join</button>
			</Link>
			<div className="header__menu-button">
			  <Link to="/cinemas">
				  <button className="button menu-button">Cinemas</button>
				</Link>
			  <Link to="/movies">
				  <button className="button menu-button">Movies</button>
				</Link>
				<Link to="/buy-tickets">
				  <button className="button menu-button">Tickets</button>
				</Link>
				<Link exact="true" to="/">
				  <button className="button menu-button">Home</button>
				</Link>
	    </div>
		  <div className="header__menu-button--media">	
			  <input type="radio" className="change-menu" name="change-menu" id='close-menu' checked value="2" />
		    <label htmlFor='close-menu'>
				  <img src={closemenu} className="menu" alt="closemenu" />
				</label>
		    <input type='radio' className='change-menu' name='change-menu' id='open-menu' value="1" />
			  <label htmlFor='open-menu'><div className="open-menu__title">Menu</div>
				  <img src={openmenu} className="menu" alt="openmenu" />
				</label>
				<div className="header__menu-button--burger">
				  <Link to="/cinemas">
				    <button className="button menu-button">Cinemas</button>
				  </Link>
				  <Link to="/movies">
				    <button className="button menu-button">Movies</button>
				  </Link> 
				  <Link to="/buy-tickets">
				    <button className="button menu-button">Tickets</button>
				  </Link> 
				  <button className="button menu-button">Coming Soon</button>
				  <Link to="/">
				    <button className="button menu-button">Home</button>
				  </Link>
				</div>
		  </div>
			<Route path="/authorisation" component={Authorisation}/>
			<Route path="/movies" component={Movies}/>
			<Route path="/buy-tickets" component={BuyTickets}/>
			<Route exact path="/" component={Home}/>
			<Route path="/cinemas" component={Cinemas}/>
			<Route path="/choose-seats" component={ChooseSeats}/>
	  </div>
	)
}
}
      
export default Upheader;