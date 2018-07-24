import React from 'react';
import Select from 'react-select';
import {Link, Route, Switch } from 'react-router-dom';
import Authorisation from './Authorisation';
import Movies from './Movies';
import ChooseSeats from './ChooseSeats';
import BuyTickets from './BuyTickets';
import Cinemas_Page from './cinemas/Cinemas_Page';
import Home_Page from './home/Home_Page';
import openmenu from './openmenu.svg';
import closemenu from './closemenu.svg';
import logo from './logo.svg';

const options = [
  { value: '1', label: 'Grodno' },
  { value: '2', label: 'Vitebsk' },
	{ value: '3', label: 'Mogilev' },
	{ value: '4', label: 'Molodechno' },
	{ value: '5', label: 'Brest' },
	{ value: '6', label: 'Minsk' }
]; 
class Header extends React.Component {

	state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
render() {
	const { selectedOption } = this.state;
	return (
		<div className="header">
			<div className="header__logo">Big cinema</div>
			<div className="header__city">
			<Select className="header__change-city"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
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
				  <button className="button menu-button"  activeclassname="active__button">Cinemas</button>
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
			<Switch>
		  	<Route path="/authorisation" component={Authorisation}/>
			  <Route path="/movies" component={Movies}/>
			  <Route path="/buy-tickets" component={BuyTickets}/>
			  <Route exact path="/" component={Home_Page}/>
			  <Route path="/cinemas" component={Cinemas_Page}/>
			  <Route path="/choose-seats" component={ChooseSeats}/>
		  </Switch>
		</div>
	)
}
}
      
export default Header;