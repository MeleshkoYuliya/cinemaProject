import React from "react";
import Registry from "./Registry";
import Login from "./Login";
class Authorisation extends React.Component {
  render() {
    return (
      <div className="login-join">
        <Login />
        <Registry />
      </div>
    );
  }
}
export default Authorisation;
