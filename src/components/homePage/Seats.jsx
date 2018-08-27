import React from "react";
import PropTypes from "prop-types";
import RoomPlan from "../chooseSeatsePage/RoomPlan";

class Seats extends React.PureComponent {
  static propTypes = {
    info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      treiler: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired
    })
  };

  // componentDidMount() {
  //   this.timer = setInterval(() => {
  //     this.doSomething();
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  render() {
    return (
      <div>
        <div className="choice-time">Time Left: 15:00</div>
        <div className="room-place">
          <div className="room-place__seats">
            <h4>Select your seats</h4>
            <RoomPlan />
          </div>
          <div className="room-place__select-film">
            <h4>{this.props.info.name}</h4>
            <img
              className="room-place__select-film__img"
              src={this.props.info.url}
              alt={this.props.info.name}
            />
            <div>
              Genre:
              {this.props.info.genre}
            </div>
            <div>
              Duration:
              {this.props.info.duration}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Seats;
