import React from "react";
import PropTypes from "prop-types";

class FilmsSoon extends React.PureComponent {
  static propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  };

  render() {
    const film_soon = this.props.movies.map(function(item, index) {
      return (
        <div className="films-soon__flex-conteiner__film" key={index}>
          <h6 className="soon_title">{item.name}</h6>
          <img
            className="films-soon__flex-container__img"
            src={item.url}
            alt={item.name}
          />
        </div>
      );
    });
    return <div className="films-soon__flex-container">{film_soon}</div>;
  }
}

export default FilmsSoon;
