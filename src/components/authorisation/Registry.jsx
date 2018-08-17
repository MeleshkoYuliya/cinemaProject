import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createUser } from "./actions/registry-actions";
import { FormErrors } from "./FormErrors";
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCtbQLfeudStMmmkEq0m4Q0xd5PfIH2eUs",
  authDomain: "films-6ff5c.firebaseapp.com",
  databaseURL: "https://films-6ff5c.firebaseio.com",
  projectId: "films-6ff5c",
  storageBucket: "films-6ff5c.appspot.com",
  messagingSenderId: "665467669015"
};

firebase.initializeApp(config);
class Registry extends PureComponent {
  state = {
    email: this.props.user.email,
    password: this.props.user.password,
    userName: this.props.user.userName,
    formErrors: { email: "", password: "", userName: "" },
    emailValid: false,
    passwordValid: false,
    userNameValid: false,
    formValid: false
  };

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  handleCreateUser = e => {
    const { onCreateUser } = this.props;
    onCreateUser({ ...this.state });
    const { email, password } = this.state;
    const auth = firebase.auth();
    // auth.signInWithEmailAndPassword(email, password);

    auth.onAuthStateChanged(firebaseUser => {});
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
    console.log(this.state.email);
  };
  componentDidMount() {
    const auth = firebase.auth();
    auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);
      } else {
        console.log("not user");
      }
    });
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let userNameValid = this.state.userNameValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid!";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short!";
        break;
      case "userName":
        userNameValid = value.length >= 6;
        fieldValidationErrors.userName = userNameValid ? "" : " is too short!";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        userNameValid: userNameValid
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
    const { email, password, userName } = this.state;
    console.log(email);
    return (
      <form className="register-block">
        <h4 className="login-join__title">Register</h4>
        <div className="panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.userName
          )}`}
        >
          <label htmlFor="userName" className="login-join__info" />
          <input
            className="login-join__add"
            type="text"
            required
            name="userName"
            placeholder="User Name"
            value={userName}
            onChange={this.handleUserInput}
          />
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
          onClick={this.handleCreateUser}
          // type="submit"
          disabled={!this.state.formValid}
        >
          Sign up
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateUser: bindActionCreators(createUser, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registry);
