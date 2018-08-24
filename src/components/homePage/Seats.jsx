import React from 'react';
import PropTypes from 'prop-types';
// import { NavLink, Link, Route } from "react-router-dom";
// import ChooseSeats from '../chooseSeatsePage/ChooseSeats';
// import SessionSeats from './SessionSeats';


class Seats extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      treiler:PropTypes.string.isRequired,
      genre:PropTypes.string.isRequired,
      description:PropTypes.string.isRequired,
      duration:PropTypes.string.isRequired,
    }),
  };

 
  render() {
        return (
            <div>
            <div className="choice-time">Time Left: 15:00</div>
            <div className="room-place">
              <div className="room-place__seats">
                <h4>Select your seats</h4>
                <div className="first">
                  <div className="row">5 row</div>
                  <img
                    className="room-place__seats__sofa"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seats-movie-multimedia-entertainment-327796565bc5d202-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__sofa"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seats-movie-multimedia-entertainment-327796565bc5d202-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__sofa"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seats-movie-multimedia-entertainment-327796565bc5d202-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__sofa"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seats-movie-multimedia-entertainment-327796565bc5d202-512x512.png"
                    alt="план зала"
                  />
                </div>
                <div className="second">
                  <div className="row">4 row</div>
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                </div>
                <div className="third">
                  <div className="row">3 row</div>
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                </div>
                <div className="third">
                  <div className="row">2 row</div>
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                </div>
                <div className="third">
                  <div className="row">1 row</div>
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                  <img
                    className="room-place__seats__arm"
                    src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-seat-movie-multimedia-entertainment-3f1c394bcf4a6b39-512x512.png"
                    alt="план зала"
                  />
                </div>
                <div>
                  <div className="screen" />
                  <div className="row">Screen</div>
                </div>
              </div>
              <div className="room-place__select-film">
                <h4>{this.props.info.name}</h4>
                <img
                  className="room-place__select-film__img"
                  src={this.props.info.url}
                  alt={this.props.info.name}
                />
                <div>Genre:{this.props.info.genre}</div>
                <div>Duration:{this.props.info.duration}</div>
              </div>
            </div>
            </div>
      );
    }
  }
  

  export default Seats;
    
        
     
