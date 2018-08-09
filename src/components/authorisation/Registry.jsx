import React from "react";
import { FormErrors } from "./FormErrors";
// import PropTypes from "prop-types";
class Registry extends React.Component {
  state = {
    email: "",
    password: "",
    userName: "",
    formErrors: { email: "", password: "", userName: "" },
    emailValid: false,
    passwordValid: false,
    userNameValid: false,
    formValid: false,
    users: {}
  };

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
      this.users = { [name]: value };
    });
  };
  //   var storageJson = JSON.stringify(this.users);
  //   console.log(this.users);
  //   localStorage.setItem("user", storageJson);
  // };
  saveUser = e => {
    // const name = e.target.name;
    // const value = e.target.value;
    this.setState({
      email: e.currentTarget.value,
      password: e.currentTarget.value,
      userName: e.currentTarget.value
    });

    // var storageJson = JSON.stringify(this.users);
    console.log(this.state.email);
    // localStorage.setItem(us, { [emailU]: pass });
  };

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

  // saveUser = (key, value) => {
  //   var storageJson = JSON.stringify(this.user);
  //   localStorage.setItem("user", storageJson);
  // };
  // componentWillMount() {
  //   localStorage.getItem("contacts") &&
  //     this.setState({
  //       contacts: JSON.parse(localStorage.getItem("contacts"))
  //     });
  // }
  // componentDidMount() {
  //   if (!localStorage.getItem("contacts")) {
  //     this.fetchData();
  //   } else {
  //     console.log(JSON.parse(localStorage.getItem("contacts")));
  //   }
  // }
  // fetchData() {}
  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem("contacts", JSON.stringify(nextState.contacts));

  //   localStorage.setItem("contactsDate", Date.now());
  // }

  render() {
    return (
      <form className="register-block">
        {/* {" "}
        {console.log(localStorage.getItem(us))} */}
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
            id="userName"
            className="login-join__add"
            type="text"
            required
            name="userName"
            placeholder="User Name"
            value={this.state.userName}
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
            id="email"
            className="login-join__add"
            type="email"
            required
            name="email"
            placeholder="Email"
            value={this.state.email}
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
            id="passvord"
            type="password"
            name="password"
            placeholder="Password"
            className="login-join__add"
            value={this.state.password}
            onChange={this.handleUserInput}
          />
        </div>
        <button
          className="login-join_btn"
          type="submit"
          disabled={!this.state.formValid}
          onClick={this.saveUser}
        >
          Sign up
        </button>
      </form>
    );
  }
}

export default Registry;