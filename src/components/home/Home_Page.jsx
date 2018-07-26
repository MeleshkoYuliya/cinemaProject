import React from 'react';
import moviesArr from './moviesArr';
import Films from './Films';

class Home_Page extends React.Component {

render() {
	return (
		<div>
		 <Films
        films={moviesArr.moviesArr}
      />
        {/* <div className="home__film"><img className="home__img" src="http://via.placeholder.com/250x360" alt="8 подруг"/>
						<div> 
							<button className="button home__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button home__button">Tickets</button></Link>
						</div>
					</div>
					<div className="home__film"> <img className="home__img" src="http://via.placeholder.com/250x360" alt="аферисты"/>
						<div> 
						  <button className="button home__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button home__button">Tickets</button></Link>
						</div>
          </div>
					<div className="home__film"> <img className="home__img" src="http://via.placeholder.com/250x360" alt="книжный клуб"/>
						<div> 
						  <button className="button home__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button home__button">Tickets</button></Link>
						</div>
          </div>
					<div className="home__film"><img className="home__img" src="http://via.placeholder.com/250x360" alt="пылающий"/>
						<div> 
						  <button className="button home__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button home__button">Tickets</button></Link>
						</div>
          </div>
					<div className="home__film"> <img className="home__img" src="http://via.placeholder.com/250x360" alt="ты водишь"/>
						<div> 
						  <button className="button home__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button home__button">Tickets</button></Link>
						</div>
          </div>
					<div className="home__film"><img className="home__img" src="http://via.placeholder.com/250x360" alt="8 подруг"/>
						<div> 
							<button className="button home__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button home__button">Tickets</button></Link>
						</div>
					</div>
					<div className="home__film"> <img className="home__img" src="http://via.placeholder.com/250x360" alt="аферисты"/>
						<div> 
						  <button className="button home__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button home__button">Tickets</button></Link>
						</div>
          </div>
					<div className="home__film"> <img className="home__img" src="http://via.placeholder.com/250x360" alt="книжный клуб"/>
						<div> 
						  <button className="button home__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button home__button">Tickets</button></Link>
						</div>
          </div>
					<div className="home__film"><img className="home__img" src="http://via.placeholder.com/250x360" alt="пылающий"/>
						<div> 
						  <button className="button home__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button home__button">Tickets</button></Link>
						</div>
          </div>
					<div className="home__film"> <img className="home__img" src="http://via.placeholder.com/250x360" alt="ты водишь"/>
						<div> 
						  <button className="button home__button">Treiler</button> 
							<Link to="/buy-tickets"><button  className="button home__button">Tickets</button></Link>
						</div>
          </div>
					<Route path="/buy-tickets" component={BuyTickets}/>
					*/}
					</div> 
	)
}
}

export default Home_Page;