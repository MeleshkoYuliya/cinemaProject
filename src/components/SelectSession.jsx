import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
class SelectSession extends React.Component {
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
    return (
      <div>
        <div>
          <div className="select-options">
            <select name="cinemas" className="select-options__cinemas">
              <option value="1">Cinemas:</option>
              <option value="2">Arena City Silver Screen</option>
              <option value="3">Velcom cinema</option>
              <option value="4">Galileo Silver Screen</option>
              <option value="5">Belarus</option>
            </select>
            <select name="date" className="select-options__date">
              <option value="1">Today, 10 July</option>
              <option value="2">Tomorrow, 11 July</option>
              <option value="3">Wednesday, 12 July</option>
              <option value="4">Thursday, 13 July</option>
              <option value="5">Fridayб 14 July</option>
            </select>
            <select
              name="session-type"
              className="select-options__session-type"
            >
              <option value="1">VMAX</option>
              <option value="2">Dolby Digital</option>
              <option value="4">3D</option>
              <option value="5">2D</option>
            </select>
          </div>
          <div className="session-selection">
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
        </div>
      </div>
    );
  }
}

export default SelectSession;
