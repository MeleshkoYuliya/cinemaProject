import React from "react";

class Registry extends React.Component {
  state = {
    email: ""
  };
  handleSubmit = () => {
    console.log("form is submitted");
  };
  handleEmailChange = () => {
    console.log("email was changed", this);
  };
  render() {
    return (
      <form className="register-block" onSubmit={this.handleSubmit}>
        <h4 className="login-join__title">Register</h4>
        <label className="login-join__info">
          <input
            className="login-join__add"
            type="text"
            name="email"
            placeholder="Email Address*"
            value={this.state.email}
            onChange={this.handleEmailChange}
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
