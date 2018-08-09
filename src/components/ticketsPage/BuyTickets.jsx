import React from "react";
import { Link, Route } from "react-router-dom";
import ChooseSeats from "../chooseSeatsePage/ChooseSeats";
import SelectCinema from "react-select";
import SelectDate from "react-select";
import PropTypes from "prop-types";

const cinemas = [
  { value: "1", label: "Arena City Silver Screen" },
  { value: "2", label: "Velcom cinema" },
  { value: "3", label: "Galileo Silver Screen" },
  { value: "4", label: "Belarus" }
];
const date = [
  { value: "5", label: "9 August" },
  { value: "6", label: "10 August" },
  { value: "7", label: "11 August" },
  { value: "8", label: "12 August" },
  { value: "9", label: "13 August" }
];
const typeSession = [
  { value: "10", label: "VMAX" },
  { value: "11", label: "Dolby Digital" },
  { value: "12", label: "3D" },
  { value: "13", label: "2D" }
];
class BuyTickets extends React.Component {
  static propTypes = {
    cinemas: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired
      })
    ),
    date: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired
      })
    )
  };
  state = {
    selectedCinema: null,
    selectedDate: null,
    selectedSession: null
  };
  handleChange = selectedCinema => {
    this.setState({ selectedCinema });
  };
  handleChangeDate = selectedDate => {
    this.setState({ selectedDate });
  };
  handleChangeSession = selectedSession => {
    this.setState({ selectedSession });
  };
  render() {
    const { selectedCinema, selectedDate, selectedSession } = this.state;
    return (
      <div>
        <div className="select-options">
          <SelectCinema
            className="header__change-city"
            value={selectedCinema}
            placeholder="select cinema"
            onChange={this.handleChange}
            options={cinemas}
          />
          <SelectDate
            className="header__change-city"
            value={selectedDate}
            placeholder="select date"
            onChange={this.handleChangeDate}
            options={date}
          />
          {console.log(selectedDate, selectedCinema, selectedSession)}
          <SelectDate
            className="header__change-city"
            value={selectedSession}
            placeholder="select type session"
            onChange={this.handleChangeSession}
            options={typeSession}
          />
        </div>

        <div className="session-selection">
          <div className="session-selection__film">
            <h4 className="select-options__title">Movie title</h4>
            <img
              className="session-selection__img"
              src="http://via.placeholder.com/250x360"
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
          <div className="session-selection__showing">
            <div className="showing__place">
              <h4>Arena City Silver Screen </h4>

              <Link to="/choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
              <Link to="choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
            </div>
            <div className="showing__place">
              <h4>Velcom cinema </h4>
              <Link to="choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
              <Link to="choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
            </div>
            <div className="showing__place">
              <h4>Belarus</h4>
              <Link to="choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
            </div>
            <div className="showing__place">
              <h4>Galileo Silver Screen</h4>
              <Link to="choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
              <Link to="choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="session-selection">
          <div className="session-selection__film">
            <h4 className="select-options__title">Movie title</h4>
            <img
              className="session-selection__img"
              src="http://via.placeholder.com/250x360"
              alt="8 подруг"
            />
            <div>Genre:</div>
            <div>Age limit:</div>
            <div> Director:</div>
            <div>Actors:</div>
            <div> Description:</div>
            <div>
              <button className="session-selection__button">
                View Treiler
              </button>
            </div>
          </div>
          <div className="session-selection__showing">
            <div className="showing__place">
              <h4>Galileo Silver Screen</h4>
              <Link to="choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
              <Link to="choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
              <Link to="choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
            </div>
            <div className="showing__place">
              <h4>Belarus</h4>
              <Link to="choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
            </div>
            <div className="showing__place">
              <h4>Galileo Silver Screen</h4>
              <Link to="choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
              <Link to="choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
            </div>
          </div>
          <Route path="/choose-seats" component={ChooseSeats} />
        </div>
      </div>
    );
  }
}

export default BuyTickets;
