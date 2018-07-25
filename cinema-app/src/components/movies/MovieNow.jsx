import React from 'react';
import PropTypes from 'prop-types';
import {Link, Route } from 'react-router-dom';
import BuyTickets from '../BuyTickets';

class MovieNow extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      code: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  };

  render() {

    return (
			<div className="films-now__flex-conteiner__film">
			<h5>{this.props.info.name}</h5>
      <img className="films-now__flex-container__img" src={this.props.info.url} alt={this.props.info.name}/>
			<div> 
							<button className="button films-now__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button films-now__button">Tickets</button></Link>
						</div>
						<Route path="/buy-tickets" component={BuyTickets}/>
			</div>
    )
    ;

  }

}

export default MovieNow;