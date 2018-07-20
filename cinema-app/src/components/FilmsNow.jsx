import React from 'react';
import {Link, Route } from 'react-router-dom';
import BuyTickets from './BuyTickets';

class FilmsNow extends React.Component {

// static propTypes = {
// 	city: PropTypes.string.isRequired,
// }
render() {
	return (
		
        <div className="films-now__flex-conteiner">
          <div className="films-now__flex-conteiner__film"><img className="films-now__flex-container__img" src="http://via.placeholder.com/250x360" alt="8 подруг"/>
						<div> 
						<button className="button films-now__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button films-now__button">Tickets</button></Link>
						</div>
					</div>
          <div className="films-now__flex-conteiner__film"> <img className="films-now__flex-container__img" src="http://via.placeholder.com/250x360" alt="аферисты"/>
						<div> 
						<button className="button films-now__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button films-now__button">Tickets</button></Link>
						</div>
          </div>
          <div className="films-now__flex-conteiner__film"> <img className="films-now__flex-container__img" src="http://via.placeholder.com/250x360" alt="книжный клуб"/>
						<div> 
						<button className="button films-now__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button films-now__button">Tickets</button></Link>
						</div>
          </div>
          <div className="films-now__flex-conteiner__film"> <img className="films-now__flex-container__img" src="http://via.placeholder.com/250x360" alt="пылающий"/>
						<div> 
						<button className="button films-now__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button films-now__button">Tickets</button></Link>
						</div>
          </div>
          <div className="films-now__flex-conteiner__film"> <img className="films-now__flex-container__img" src="http://via.placeholder.com/250x360" alt="ты водишь"/>
						<div> 
						<button className="button films-now__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button films-now__button">Tickets</button></Link>
						</div>
          </div>
          <div className="films-now__flex-conteiner__film"> <img className="films-now__flex-container__img" src="http://via.placeholder.com/250x360" alt="убийца2"/>
						<div> 
						<button className="button films-now__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button films-now__button">Tickets</button></Link>
						</div>
          </div>
          <div className="films-now__flex-conteiner__film"> <img className="films-now__flex-container__img" src="http://via.placeholder.com/250x360" alt="человек-оса"/>
						<div> 
						<button className="button films-now__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button films-now__button">Tickets</button></Link>
						</div>
          </div>
          <div className="films-now__flex-conteiner__film"> <img className="films-now__flex-container__img" src="http://via.placeholder.com/250x360" alt="эскобар"/>
            <div> 
						<button className="button films-now__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button films-now__button">Tickets</button></Link>
						</div>
          </div>
          <div className="films-now__flex-conteiner__film"><img className="films-now__flex-container__img" src="http://via.placeholder.com/250x360" alt="хот-дог"/>
            <div> 
						<button className="button films-now__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button films-now__button">Tickets</button></Link>
						</div>
          </div>
					<div className="films-now__flex-conteiner__film"><img className="films-now__flex-container__img" src="http://via.placeholder.com/250x360" alt="хот-дог"/>
            <div> 
						<button className="button films-now__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button films-now__button">Tickets</button></Link>
						</div>
          </div>
					<div className="films-now__flex-conteiner__film"><img className="films-now__flex-container__img" src="http://via.placeholder.com/250x360" alt="хот-дог"/>
            <div> 
						<button className="button films-now__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button films-now__button">Tickets</button></Link>
						</div>
          </div>
					<Route path="/buy-tickets" component={BuyTickets}/>
        </div>
  
	)
}
}
      
export default FilmsNow;