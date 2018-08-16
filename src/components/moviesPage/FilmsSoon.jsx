import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { requestFilmsSoon } from "../mainLayout/actions/filmsSoon-actions";

class FilmsSoon extends React.PureComponent {
  // static propTypes = {
  //   movies: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       name: PropTypes.string.isRequired,
  //       url: PropTypes.string.isRequired
  //     })
  //   )
  // };

  render() {
    const obj = Object.assign({}, this.props.moviesSoon[0]);
    const filmsSoon = Object.values(obj);
    console.log(this.props.moviesSoon);
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
// const mapDispatchToProps = dispatch => {
//   return {
//     onAddFilms: dataFilmsSoon => {
//       dispatch(requestFilmsSoon(dataFilmsSoon));
//     }
//   };
// };

// const mapStateToProps = state => {
//   return {
//     dataFilmsSoon: state.dataFilmsSoon
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FilmsSoon);
export default FilmsSoon;
