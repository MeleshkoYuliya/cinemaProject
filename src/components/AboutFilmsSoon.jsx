import React from "react";

class AboutFilmsSoon extends React.Component {
  render() {
    return (
      <div className="session-selection__film">
        <h4 className="select-options__title">Movie title</h4>
        <img
          className="session-selection__img"
          src="https://images-na.ssl-images-amazon.com/images/I/81q1pCAhioL._SL1333_.jpg"
          alt="8 подруг"
        />
        <div>Genre:</div>
        <div>Age limit:</div>
        <div> Director:</div>
        <div>Actors:</div>
        <div> Description:</div>
        <div>
          <button className="button session-selection__button">
            View Treiler
          </button>
        </div>
      </div>
    );
  }
}
export default AboutFilmsSoon;
