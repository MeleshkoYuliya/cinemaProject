import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import SelectSession from "../mainLayout/SelectSession";
import { withRouter } from "react-router-dom";

class Films extends React.Component {
  static propTypes = {
    films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        url: PropTypes.string
      })
    )
  };
  state={
    movie: {},
  }
  handleCreateFilm=(e)=> {
    const {films}=this.props;
    const { history } = this.props;
    const filmsSoon = films.find(filmsSoon => filmsSoon.name === e);
   console.log(filmsSoon);
   if (filmsSoon) {
    history.push(`/movie/:${filmsSoon.id}`);
    this.setState({
      movie: filmsSoon
    });
  }
  }
  
  render() {
    var filmsCode = this.props.films.map((film, index) => {
      return (
        <div className="home_film" key={index}>
          <div className="film_title">
            <h5>{film.name}</h5>
          </div>
          <img className="home__img" src={film.url} alt={film.name} />
          <div>
            <button className="home__button">Treiler</button>
            {/* <Link to="/buy-tickets"> */}
              <button className="home__button" id={film.name} onClick={() => this.handleCreateFilm(film.name)}>Tickets</button>
            {/* </Link> */}
          </div>
          <Switch>
          <Route path={`/movie/:${film.id}`}>
            <SelectSession id={film.id} film={this.state.movie} />
          </Route>
        </Switch>
          {/* <Route path="/buy-tickets" component={BuyTickets} /> */}
        </div>
      );
    });
    return <div className="home">{filmsCode}</div>;
  }
}


export default withRouter(Films);
