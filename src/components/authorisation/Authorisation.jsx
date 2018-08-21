import React from "react";
import Registry from "./Registry";
import Login from "./Login";
import { withRouter } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
 
class Authorisation extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div className="login-join">
        <Login />
        <Registry />
      </div>
      </ReactCSSTransitionGroup> 
    );
  }
}

export default withRouter(Authorisation);
