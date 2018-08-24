import React from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
import { Switch, Route } from "react-router-dom";
import AboutFilm from "./AboutFilm";
=======
import {  Route, NavLink } from "react-router-dom";
>>>>>>> film
import { withRouter } from "react-router-dom";
import AboutFilmPage from "./AboutFilmPage";

class Films extends React.Component {
  static propTypes = {
<<<<<<< HEAD
    films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        url: PropTypes.string
      })
    )
  };
  state = {
    film: {}
  };
 
  handleSelectFilm = e => {
    const { films } = this.props;
    const { history } = this.props;
    const movie = films.find(movie => movie.name === e);  
    if (movie){ 
      history.push(`/film/:${movie.id}`);
      this.setState({
        film: movie
      });
      console.log(this.state.film)
    } 
=======
    info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
  })
>>>>>>> film
  };

  
  render() {
<<<<<<< HEAD
 
    var filmsCode = this.props.films.map((film, index) => {
      return (
        <div className="home_film" key={index}>
          <div className="film_title">
            <h5>{film.name}</h5>
          </div>
          <img className="home__img" src={film.url} alt={film.name} />
          <div>
            {/* <button className="home__button">Treiler</button> */}
            {/* <Link to="/buy-tickets"> */}
            <button
              className="home__button"
              id={film.name}
              onClick={() => this.handleSelectFilm(film.name)}
            >
              Tickets
            </button>
            {/* </Link> */}
          </div>
         
          <Switch>
            <Route path={`/film/:${film.id}`}>
              <AboutFilm id={film.id} film={this.state.film} />
            </Route>
          </Switch>
          {/* <Route path="/buy-tickets" component={BuyTickets} /> */}
        </div>
      );
    });
  return (<div className="home">{filmsCode}
   </div>);
=======
  
    return (
      <div className="home_film">
        <div className="film_title">
        <NavLink to={"/film/"+this.props.info.id} className="film_title_link"><h5>{this.props.info.name}</h5></NavLink>
        </div>
        <img className="home__img" src={this.props.info.url} alt={this.props.info.name} />
        <div>
        
        </div>
        <Route path="/film/:id" component={AboutFilmPage}/>
      </div>
    );
>>>>>>> film
  }
}

export default withRouter(Films);

