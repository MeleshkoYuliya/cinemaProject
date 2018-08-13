import React, { PureComponent } from "react";

import { Link } from "react-router-dom";
import PagesLinks from "./PagesLinks";
import SelectFilms from "./SelectFilms";
// import axios from "axios";
let moviesNow = require("../moviesNow.json");
let moviesSoon = require("../moviesSoon.json");
let searchInput = "Search films";

// const instance = axios.create({
//   baseURL: "https://films-6ff5c.firebaseio.com/"
// });

class Header extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     moviesNow: []
  //   };
  // }
  // componentDidMount() {
  //   instance
  //     .get("moviesNow.json")
  //     .then(data => {
  //       this.setState({
  //         moviesNow: data.data
  //       });
  //     })
  //     .catch(e => console.log(e));
  // }
  render() {
    return (
      <div>
        <div className="header">
          <Link exact="true" to="/">
            <div className="header__logo">Big cinema</div>
          </Link>
          <div className="header__city" />

          <div className="spacer" />
          <PagesLinks />
        </div>
        <SelectFilms
          movies={moviesNow}
          moviesSoon={moviesSoon}
          defaultInput={searchInput}
        />
      </div>
    );
  }
}

export default Header;
