import React from "react";

import Cinemas from "./Cinemas";

let cinemasArr = require("./cinemas.json");
class Cinemas_Page extends React.Component {
  render() {
    return <Cinemas cinemas={cinemasArr} />;
  }
}
export default Cinemas_Page;
