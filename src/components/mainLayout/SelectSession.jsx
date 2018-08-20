import React from "react";
import { Link, Route } from "react-router-dom";
import SelectOptions from "../ticketsPage/SelectOptions";
import { withRouter } from "react-router-dom";
// import PropTypes from "prop-types";
// import {db} from '../firebase/firebase'
import ChooseSeats from "../chooseSeatsePage/ChooseSeats";
// import { connect } from "react-redux";
// import { requestFilms } from "../mainLayout/actions/filmsNow-actions";
// import { requestFilmsSoon } from "../mainLayout/actons_filmsSoon/filmsSoon-actions";
// import firebase from "firebase";

// var config = {
//   apiKey: "AIzaSyCtbQLfeudStMmmkEq0m4Q0xd5PfIH2eUs",
//   authDomain: "films-6ff5c.firebaseapp.com",
//   databaseURL: "https://films-6ff5c.firebaseio.com",
//   projectId: "films-6ff5c",
//   storageBucket: "films-6ff5c.appspot.com",
//   messagingSenderId: "665467669015"
// };

// const dbRefObj = firebase.database().ref("moviesNow");
// const ref = firebase.database().ref("moviesNow");
class SelectSession extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null,
  //     id: this.props
  //   };
  // }

  // componentDidMount() {
  //   dbRefObj.on("child_added", snap => {
  //     const allfil = snap.val().id;
  //     this.setState({
  //       data: allfil
  //     });
  //     console.log(this.state.data);
  //   });
  //   console.log(this.state.id);
  // }

  render() {
    const { film } = this.props;
    // const { allfilms } = this.state;
    // const obj = Object.assign({}, this.props.movies.movies[0]);
    // const moviesNow = Object.values(obj);
    // const object = Object.assign({}, this.props.dataSoon.moviesSoon[0]);
    // const filmsSoon = Object.values(object);
    // console.log(filmsSoon);
    // console.log(this.props.id)
    // const filmCode = moviesNow.map(function(item, index) {
    //   return (
    //     <div className="session-selection__film" key={item.id}>
    //       <h4 className="select-options__title">{item.name}</h4>
    //       <img
    //         className="session-selection__img"
    //         src={item.url}
    //         alt={item.name}
    //       />
    //     </div>
    //   );
    // });
    return (
      <div>
        <SelectOptions />
        <div className="session-selection">
          <div>
            {/* <div>{filmCode[id]}</div> */}
            <div className="session-selection__film">
              <h4 className="select-options__title">{film.name}</h4>
              <img
                // className="session-selection__img"
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
