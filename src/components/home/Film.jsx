import React from 'react';
import PropTypes from 'prop-types';
import {Link, Route } from 'react-router-dom';
import BuyTickets from '../buy-tickets/BuyTickets';
class Film extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      code: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  };

  render() {

    return (
			<div className='home__film'>
			<h5>{this.props.info.name}</h5>
      <img className="home__img" src={this.props.info.url} alt={this.props.info.name}/>
			<div> 
							<button className="button home__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button home__button">Tickets</button></Link>
						</div>
						<Route path="/buy-tickets" component={BuyTickets}/>
			</div>
    )
    ;

  }

}

export default Film;
