import React from "react";
// import { FormErrors } from "./FormErrors";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changePassword, changeEmail } from "./actions/login-actions";
class Login extends React.Component {
  // state = {
  //   email: "",
  //   password: "",
  //   formErrors: { email: "", password: "" },
  //   emailValid: false,
  //   passwordValid: false,
  //   formValid: false
  // };

  // handleUserInput = e => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({ [name]: value }, () => {
  //     this.validateField(name, value);
  //   });
  // };

  // validateField(fieldName, value) {
  //   let fieldValidationErrors = this.state.formErrors;
  //   let emailValid = this.state.emailValid;
  //   let passwordValid = this.state.passwordValid;

  //   switch (fieldName) {
  //     case "email":
  //       emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  //       fieldValidationErrors.email = emailValid ? "" : " is invalid!";
  //       break;
  //     case "password":
  //       passwordValid = value.length >= 6;
  //       fieldValidationErrors.password = passwordValid ? "" : " is too short!";
  //       break;
  //     default:
  //       break;
  //   }
  //   this.setState(
  //     {
  //       formErrors: fieldValidationErrors,
  //       emailValid: emailValid,
  //       passwordValid: passwordValid
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
    const { email, password, changeEmail, changePassword } = this.props;
    return (
      <form className="enter-block">
        <h4 className="login-join__title">Sign in</h4>
        {/* <div className="panel-default">
          {/* <FormErrors formErrors={this.state.formErrors} /> */}
        {/* </div> */}
        <div
        // className={`form-group ${this.errorClass(
        //   this.state.formErrors.email
        >
          <label htmlFor="email" className="login-join__info" />
          <input
            className="login-join__add"
            type="email"
            required
            name="email"
            placeholder="Email"
            value={email}
            onChange={event => {
              changeEmail(event.target.value);
            }}
          />
        </div>
        <div
        // className={`form-group ${this.errorClass(
        //   this.state.formErrors.password
        // )}
        >
          <label htmlFor="password" className="login-join__info" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-join__add"
            // value={this.state.password}
            // onClick={this.handleUserInput}
            value={password}
            onChange={event => {
              changePassword(event.target.value);
            }}
          />
        </div>
        <button
          className="login-join_btn"
          type="submit"
          // disabled={!this.state.formValid}
        >
          Login
        </button>
        {console.log(email)}
        {console.log(password)}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeEmail: bindActionCreators(changeEmail, dispatch),
    changePassword: bindActionCreators(changePassword, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
