import React from "react";
import PagesRouter from "./PagesRouter";
import PagesLinks from "./PagesLinks";

class Content extends React.Component {
  render() {
    return (
      <div>
        <PagesRouter />
        <PagesLinks />
      </div>
    );
  }
}
export default Content;
