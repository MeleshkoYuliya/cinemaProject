import React from 'react';
import PropTypes from 'prop-types';

function MainPage(props) {
  const obj = Object.assign({}, props.movies.movies[0]);
  const moviesNow = Object.values(obj);
  var filmCode = moviesNow.map(film => (
    <div className="home_film" key={film.id}>
      <div className="film_title">
        <h5>{film.name}</h5>
      </div>
      <img className="home__img" src={film.url} alt={film.name} />
      <div />
    </div>
  ));
  return (
    <div>
      {!props.movies.loading ? (
        <div className="home">{filmCode} </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

MainPage.propTypes = {
  moviesNow: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

export default MainPage;
