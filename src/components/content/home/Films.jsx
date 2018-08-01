import React from "react";
import PropTypes from "prop-types";
// import Film from "./Film";

class Films extends React.PureComponent {
  static propTypes = {
    films: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  };

  render() {
    // var filmCode = this.props.films.map(film => (
    //   <Film key={film.code} info={film} />
    // ));
    const filmsCode = this.props.films.map(function(item, index) {
      return (
        <div className="home_film" key={index}>
          <h5>{item.name}</h5>
          <img className="home__img" src={item.url} alt={item.name} />
        </div>
      );
    });
    return <div className="home_film">{filmsCode}</div>;
  }
}
export default Films;
