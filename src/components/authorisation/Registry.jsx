import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  savePassword,
  saveEmail,
  saveName,
  saveUser
} from "./actions/registry-actions";
// import { FormErrors } from "./FormErrors";
// import PropTypes from "prop-types";
class Registry extends React.Component {
  // state = {
  //   email: "",
  //   password: "",
  //   userName: "",
  //   formErrors: { email: "", password: "", userName: "" },
  //   emailValid: false,
  //   passwordValid: false,
  //   userNameValid: false,
  //   formValid: false,
  //   users: {}
  // };

  // handleUserInput = e => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   this.setState({ [name]: value }, () => {
  //     this.validateField(name, value);
  //     this.users = { [name]: value };
  //   });
  // };

  // saveUser = e => {
  //   this.setState({
  //     email: e.currentTarget.value,
  //     password: e.currentTarget.value,
  //     userName: e.currentTarget.value
  //   });

  // };

  // validateField(fieldName, value) {
  //   let fieldValidationErrors = this.state.formErrors;
  //   let emailValid = this.state.emailValid;
  //   let passwordValid = this.state.passwordValid;
  //   let userNameValid = this.state.userNameValid;

  //   switch (fieldName) {
  //     case "email":
  //       emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  //       fieldValidationErrors.email = emailValid ? "" : " is invalid!";
  //       break;
  //     case "password":
  //       passwordValid = value.length >= 6;
  //       fieldValidationErrors.password = passwordValid ? "" : " is too short!";
  //       break;
  //     case "userName":
  //       userNameValid = value.length >= 6;
  //       fieldValidationErrors.userName = userNameValid ? "" : " is too short!";
  //       break;
  //     default:
  //       break;
  //   }
  //   this.setState(
  //     {
  //       formErrors: fieldValidationErrors,
  //       emailValid: emailValid,
  //       passwordValid: passwordValid,
  //       userNameValid: userNameValid
  //     },
  //     this.validateForm
  //   );
  // }

  // validateForm() {
  //   this.setState({
  //     formValid: this.state.emailValid && this.state.passwordValid
  //   });
  // }

  // errorClass(error) {
  //   return error.length === 0 ? "" : "has-error";
  // }

  render() {
    const {
      userSave,
      emailSave,
      passwordSave,
      userNameSave,
      saveEmail,
      savePassword,
      saveName
    } = this.props;

    return (
      <form className="register-block">
        <h4 className="login-join__title">Register</h4>
        <div className="panel-default">
          {/* <FormErrors formErrors={this.state.formErrors} /> */}
        </div>
        <div
        // className={`form-group ${this.errorClass(
        //   this.state.formErrors.userName
        // )}`}
        >
          <label htmlFor="userName" className="login-join__info" />
          <input
            id="userName"
            className="login-join__add"
            type="text"
            required
            name="userName"
            placeholder="User Name"
            value={userNameSave}
            onChange={event => {
              saveName(event.target.value);
            }}
            // value={this.state.userName}
            // onChange={this.handleUserInput}
          />
        </div>
        <div
        // className={`form-group ${this.errorClass(
        //   this.state.formErrors.email
        // )}`}
        >
          <label htmlFor="email" className="login-join__info" />
          <input
            id="email"
            className="login-join__add"
            type="email"
            required
            name="email"
            placeholder="Email"
            value={emailSave}
            onChange={event => {
              saveEmail(event.target.value);
            }}
            // value={this.state.email}
            // onChange={this.handleUserInput}
          />
        </div>
        <div
        // className={`form-group ${this.errorClass(
        //   this.state.formErrors.password
        // )}`}
        >
          <label htmlFor="password" className="login-join__info" />
          <input
            id="passvord"
            type="password"
            name="password"
            placeholder="Password"
            className="login-join__add"
            value={passwordSave}
            onChange={event => {
              savePassword(event.target.value);
            }}
            // value={this.state.password}
            // onChange={this.handleUserInput}
          />
        </div>
        <button
          className="login-join_btn"
          // type="submit"
          // disabled={!this.state.formValid}
        >
          {console.log(userSave)}
          Sign up
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    userSave: (state.userSave = {
      useremailSave: state.emailSave,
      passwordSave: state.passwordSave,
      userNameSave: state.userNameSave
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUser: bindActionCreators(saveUser, dispatch),
    saveEmail: bindActionCreators(saveEmail, dispatch),
    savePassword: bindActionCreators(savePassword, dispatch),
    saveName: bindActionCreators(saveName, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registry);
