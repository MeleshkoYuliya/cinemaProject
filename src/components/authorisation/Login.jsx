import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { FormErrors } from "./FormErrors";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { identifyingUser } from "./actions/login-actions";
import firebase from "firebase";

class Login extends PureComponent {
  state = {
    email: this.props.login.email,
    password: this.props.login.password,
    formErrors: { email: "", password: "" },
    emailValid: false,
    passwordValid: false,
    userNameValid: false,
    formValid: false,
    isUser: true
  };

  handleIdentifyingUser = e => {
    const { onIdentyfyingUser } = this.props;
    onIdentyfyingUser({ ...this.state });
    const { email, password } = this.state;
    const { history } = this.props;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise
      .then(() => {
        history.push("/movies");
      })
      .catch(error => {
        console.log(error.message);
        this.setState({
          isUser: false
        });
      });

    e.preventDefault();
  };

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid!";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short!";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    const { email, password } = this.state;
    return (
      <form className="enter-block">
        <h4 className="login-join__title">Sign in</h4>
        <div className="panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.email
          )}`}
        >
          <label htmlFor="email" className="login-join__info" />
          <input
            className="login-join__add"
            type="email"
            required
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleUserInput}
          />
        </div>
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.password
          )}`}
        >
          <label htmlFor="password" className="login-join__info" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-join__add"
            value={password}
            onChange={this.handleUserInput}
          />
        </div>
        <button
          className="login-join_btn"
          onClick={this.handleIdentifyingUser}
          type="submit"
          disabled={!this.state.formValid}
        >
          Sign in
        </button>
        {!this.state.isUser && (
          <div className="panel-default">
            The password is invalid or the user does not have a password!!!
          </div>
        )}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIdentyfyingUser: bindActionCreators(identifyingUser, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
