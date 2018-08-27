import React, { Component } from "react";
import { auth } from "../firebase";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    auth
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <form onSubmit={this.onSubmit} className="enter-block">
        <h4 className="login-join__title">Change password</h4>
        <input
          className="login-join__add"
          value={this.state.email}
          onChange={event =>
            this.setState(updateByPropertyName("email", event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />

        <input
          className="login-join__add"
          value={passwordOne}
          onChange={event =>
            this.setState(
              updateByPropertyName("passwordOne", event.target.value)
            )
          }
          type="password"
          placeholder="New Password"
        />
        <input
          className="login-join__add"
          value={passwordTwo}
          onChange={event =>
            this.setState(
              updateByPropertyName("passwordTwo", event.target.value)
            )
          }
          type="password"
          placeholder="Confirm New Password"
        />
        <button
          disabled={isInvalid}
          type="submit"
          className="changePassword__btn"
        >
          Reset My Password
        </button>

        {error && (
          <div>
            This operation is sensitive and requires recent authentication. Log
            in again before retrying this request.
          </div>
        )}
      </form>
    );
  }
}

export default PasswordChangeForm;
