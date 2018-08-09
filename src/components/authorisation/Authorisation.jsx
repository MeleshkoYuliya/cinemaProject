import React from "react";
import Registry from "./Registry";
import Main from "./Exp";
// import { Provider } from "react-redux";
class Authorisation extends React.Component {
  render() {
    return (
      <div className="login-join">
        <Main />
        <Registry />
      </div>
    );
  }
}
export default Authorisation;
