import React from "react";

class Registry extends React.Component {
  render() {
    return (
      <form className="register-block">
        <h4 className="login-join__title">Register</h4>
        <label className="login-join__info">
          <input
            className="login-join__add"
            type="email"
            name="email"
            placeholder="Email Address*"
          />
        </label>
        <label className="login-join__info">
          <input
            className="login-join__add"
            type="text"
            placeholder="User Name*"
          />
        </label>
        <label className="login-join__info">
          <input
            className="login-join__add"
            type="password"
            name="password"
            placeholder="Passvord*"
          />
        </label>
        <label className="login-join__info">
          <input type="submit" className="login-join_btn" value="Register" />
        </label>
      </form>
    );
  }
}
export default Registry;
