import React from "react";
import { Link } from "react-router-dom";
import SelectOptions from "../ticketsPage/SelectOptions";
import PropTypes from "prop-types"; 
import axios from "axios";
 const instance = axios.create({
  baseURL: "https://films-6ff5c.firebaseio.com/"
});

class SelectSession extends React.Component {
  static propTypes = {
    id: PropTypes.number
  };

  constructor(props){
    super(props);
    this.state = {
            id: this.props.id,
            name: "",
            url: "",
        };
    };
    componentDidMount() {
      instance
        .get("moviesNow.json")
        .then(data => {
          this.setState({
            filmsNow: data.data
          });
          console.log(data.data);

        })
        .catch(e => console.log(e));
//       const rootRef = firebase.database().ref();
// const post = rootRef.child('post').orderByKey();
// axios.get('https://films-6ff5c.firebaseio.com/' + moviesNow.id + '.json?auth=DATABASE-SECRET')
// .then((response) => {
//   console.log(response)
// });
//      post.once('value', snap => {
//        snap.forEach(child => {
//            this.setState({
//                id: this.state.id.concat([child.id]),
//                name: this.state.title.concat([child.val().name]),
//                url: this.state.story.concat([child.val().url])

//            })
//           })
//         })
      // router.post('/login', function(req, res) {
      //   const ref = db.ref('/users');
      
      //   ref.orderByChild('email')
      //     .equalTo(req.body.email)
      //     .once('value')
      //     .then(function (snapshot) {
      //       var value = snapshot.val();
      //       if (value) {
              // value is an object containing one or more of the users that matched your email query
              // choose a user and do something with it
      //       } else {
      //         res.status(401)
      //           .json({
      //             error: 'No user found',
      //           )};
      //       }
      //     });
      // });
}
  // state = {
  //   movie: this.props.movie
  // };
  render() {
    
    // console.log(this.props.id);
    // const { film } = this.props;
    return (
      <div>
        <SelectOptions />
        <div className="session-selection">
          <div>
            {/* <div className="session-selection__film"> */}
              {/* <h4 className="select-options__title">{film.name}</h4>
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
      </div>
    );
  }
}


export default SelectSession;
