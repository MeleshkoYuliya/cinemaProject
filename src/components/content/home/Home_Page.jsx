import React from "react";
import Films from "./Films";
let moviesNow = require("./moviesNow.json");
class Home_Page extends React.Component {
  render() {
    return (
      <div>
        <Films className="home" films={moviesNow} />
      </div>
    );
  }
}

export default Home_Page;
