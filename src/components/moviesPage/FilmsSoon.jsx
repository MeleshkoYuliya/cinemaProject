import React from "react";
import JwModal from "jw-react-modal";
import { style } from "./modalWindowStyle";

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
            // onClick={JwModal.open("custom-modal-1")}
          />
          {/* <JwModal id="custom-modal-1" style={style}>
            <h5>{item.description}</h5>
            <button
              className="modal-button"
              onClick={JwModal.close("custom-modal-1")}
            >
              ok
            </button>
          </JwModal> */}
        </div>
      );
    });
  
    return <div className="films-soon__flex-container">{film_soon}</div>;
  }
}

export default FilmsSoon;
