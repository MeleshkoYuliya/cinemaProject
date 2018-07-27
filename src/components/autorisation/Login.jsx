import React from "react";

class Login extends React.Component {
  render() {
    return (
      <form className="enter-block">
        <h4 className="login-join__title">Sign in</h4>
        <label className="login-join__info">
          <input
            className="login-join__add"
            type="text"
            value=""
            placeholder="Email Address*"
          />
        </label>
        <label className="login-join__info">
          <input
            className="login-join__add"
            type="text"
            value=""
            placeholder="Passvord*"
          />
        </label>
        <label className="login-join__info">
          <input
            type="submit"
            className="button login-join_btn"
            value="Login"
          />
        </label>
      </form>
    );
  }
}
export default Login;
