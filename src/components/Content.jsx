import React from "react";
import PagesRouter from "./header/PagesRouter";
import PagesLinks from "./header/PagesLinks";

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
