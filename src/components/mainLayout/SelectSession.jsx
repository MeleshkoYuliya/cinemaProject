import React from "react";
import { Switch, withRouter, Route, Link } from "react-router-dom";
import SelectOptions from "../ticketsPage/SelectOptions";
import ChooseSeats from "../chooseSeatsePage/ChooseSeats";

class SelectSession extends React.Component {

  render() {
    const { film } = this.props;
    return (
      <div>
        <SelectOptions />
        <div className="session-selection">
          <div>
            <div className="session-selection__film">
              <h4 className="select-options__title">{film.name}</h4>
              <img
                className="selection__img"
                src={film.url}
                alt={film.name}
              />
            </div>

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
        <Route path="/choose-seats" component={ChooseSeats} />
      </div>
    );
  }
}

export default withRouter(SelectSession);
