import React from "react";
import { Link } from "react-router-dom";
import SelectOptions from "./SelectOptions";
import withAuthorization from "../Session/withAuthorization";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


class BuyTickets extends React.Component {
  render() {
    const obj = Object.assign({}, this.props.movies.movies[0]);
    const moviesNow = Object.values(obj);

    const film_now = moviesNow.map(function(item, index) {
      return (
      
        <div className="session-selection" key={index}>
          <div className="session-selection__film">
            <h4 className="select-options__title">{item.name}</h4>
            <img
              className="session-selection__img"
              src={item.url}
              alt={item.name}
            />
          
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
              <Link to="/choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
            </div>
            <div className="showing__place">
              <h4>Velcom cinema </h4>
              <Link to="/choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
              <Link to="/choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
            </div>
            <div className="showing__place">
              <h4>Belarus</h4>
              <Link to="/choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
            </div>
            <div className="showing__place">
              <h4>Galileo Silver Screen</h4>
              <Link to="/choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
              <Link to="/choose-seats">
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      );
    });

    return (
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div>
        <SelectOptions />
        {film_now}
      </div>
      </ReactCSSTransitionGroup>
    );
  }
}

const authCondition = authUser => !!authUser;

const mapStateToProps = state => {
  const props = {
    movies: state.movies
  };
  return props;
};


export default withAuthorization(authCondition)(
  connect(mapStateToProps)(BuyTickets)
);
