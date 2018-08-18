import React from "react";

class FilmsSoon extends React.PureComponent {
  render() {
    const obj = Object.assign({}, this.props.moviesSoon[0]);
    const filmsSoon = Object.values(obj);
    const film_soon = filmsSoon.map(function(item, index) {
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
