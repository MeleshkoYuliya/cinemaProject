import React from "react";
import { Link, Route } from "react-router-dom";
import SelectOptions from "../ticketsPage/SelectOptions";
import PropTypes from "prop-types";
import ChooseSeats from "../chooseSeatsePage/ChooseSeats";
import { connect } from "react-redux";
import { requestFilms } from "../mainLayout/actions/filmsNow-actions";
import { requestFilmsSoon } from "../mainLayout/actons_filmsSoon/filmsSoon-actions";
// import firebase from "firebase";

// var config = {
//   apiKey: "AIzaSyCtbQLfeudStMmmkEq0m4Q0xd5PfIH2eUs",
//   authDomain: "films-6ff5c.firebaseapp.com",
//   databaseURL: "https://films-6ff5c.firebaseio.com",
//   projectId: "films-6ff5c",
//   storageBucket: "films-6ff5c.appspot.com",
//   messagingSenderId: "665467669015"
// };

// firebase.initializeApp(config);

// const dbRefObject = firebase.database().ref();

// const dbRefObj = firebase.database().ref();
// const ref = firebase.database().ref("moviesNow");
class SelectSession extends React.Component {
  state = {
    allfilms: []
  };
  // componentDidMount() {
  //   dbRefObject.on("value", snap => {
  //     const allfilms = snap.val().moviesNow;
  //     const allSoon = snap.val().moviesSoon;
  //     console.log(allfilms, allSoon);
  //     const newArr = [];
  //     newArr.push(allSoon);
  //     newArr.push(allfilms);
  //     this.setState({
  //       allfilms: newArr
  //     });
  //   });
  // dbRefObj.on("value", snap => {
  //   const allfil = snap.val();
  //   console.log(allfil);
  //   this.setState({
  //     allfil: snap.val()
  //   });
  // });

  //   dbRefObject
  //     .child("moviesNow")
  //     .children(["0", "1"])
  //     .on("value", snapshot => {
  //       snapshot.val();
  //       console.log(snapshot.val());
  //     });
  // ref
  //   .orderByKey()
  //   .on("child_added", function(snapshot) {
  // 		console.log(snapshot.val());
  //   });

  // dbRefObject.on("value", snapshot => {
  //   snapshot.val();
  //   console.log(snapshot.val());
  // });
  // }
  // componentDidMount = () => {
  //   const { onAddFilms, onAddTodo } = this.props;
  //   onAddFilms({ ...this.state });
  //   onAddTodo({ ...this.state });
  // };

  render() {
    // const { allfilms } = this.state;
    const obj = Object.assign({}, this.props.movies.movies[0]);
    const moviesNow = Object.values(obj);
    const object = Object.assign({}, this.props.dataSoon.moviesSoon[0]);
    const filmsSoon = Object.values(object);
    console.log(filmsSoon);
    const { id } = this.props;
    console.log(this.state.allfilms);
    const filmCode = moviesNow.map(function(item, index) {
      return (
        <div className="session-selection__film" key={item.id}>
          <h4 className="select-options__title">{item.name}</h4>
          <img
            className="session-selection__img"
            src={item.url}
            alt={item.name}
          />
        </div>
      );
    });
    return (
      <div>
        <SelectOptions />
        <div className="session-selection">
          <div>
            <div>{filmCode[id]}</div>
            {/* <div className="session-selection__film">
              {" "}
              <h4 className="select-options__title">{film.name}</h4>
              <img
                className="session-selection__img"
                src={film.url}
                alt={film.name}
              />
            </div> */}

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
const mapStateToProps = state => {
  return {
    movies: state.movies,
    dataSoon: state.dataSoon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddFilms: dataSoon => {
      dispatch(requestFilmsSoon(dataSoon));
    },
    onAddTodo: movies => {
      dispatch(requestFilms(movies));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectSession);
// export default SelectSession;
