import React, { PureComponent } from "react";
// import { FormErrors } from "./FormErrors";

class AdminPage extends PureComponent {
  // state = {
  //   email: this.props.login.email,
  //   password: this.props.login.password,
  //   formErrors: { email: "", password: "" },
  //   emailValid: false,
  //   passwordValid: false,
  //   userNameValid: false,
  //   formValid: false,
  //   isUser: true
  // };

  // handleIdentifyingUser = e => {
  //   const { onIdentyfyingUser } = this.props;
  //   onIdentyfyingUser({ ...this.state });
  //   const { email, password } = this.state;
  //   const { history } = this.props;
  //   const auth = firebase.auth();
  //   const promise = auth.signInWithEmailAndPassword(email, password);
  //   promise
  //     .then(() => {
  //       history.push("/movies");
  //     })
  //     .catch(error => {
  //       console.log(error.message);
  //       this.setState({
  //         isUser: false
  //       });
  //     });

  //   e.preventDefault();
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
    // const { email, password } = this.state;
    return (
      <React.Fragment>
        <div className="login-join">
          <form className="enter-block">
            <h5 className="login-join__title">Information about the cinema</h5>
            <input
              type="text"
              value=""
              placeholder="City*"
              className="login-join__add"
            />
            <input
              type="text"
              value=""
              placeholder="Title*"
              className="login-join__add"
            />
            <input
              type="text"
              value=""
              placeholder="Number of rooms*"
              className="login-join__add"
            />
            <input
              type="text"
              value=""
              placeholder="Number of seats*"
              className="login-join__add"
            />
            <select name="KindSeats" className="login-join__add">
              <option value="1">VIP</option>
              <option value="2">Love seats</option>
              <option value="3">Economy</option>
            </select>
            <button className="login-join_btn">save</button>
          </form>
        </div>
        <div className="login-join">
          <form className="enter-block">
            <h5 className="login-join__title">Information about the film</h5>
            <input
              type="text"
              value=""
              placeholder="Title*"
              className="login-join__add"
            />
            <input
              type="text"
              value=""
              placeholder="Begining date*"
              className="login-join__add"
            />
            <input
              type="text"
              value=""
              placeholder="Expiration date*"
              className="login-join__add"
            />
            <textarea
              name="mytext"
              className="login-join__add"
              defaultValue="Description..."
            />
            <button className="login-join_btn">save</button>
            <hr />
            <div>
              <h5 className="login-join__title">Optional services</h5>
              <label className="Options">
                <input type="checkbox" value="1" className="Options" />
                Pop-corn
              </label>
              <label className="Options">
                <input type="checkbox" value="2" />
                Crisps
              </label>
              <label className="Options">
                <input type="checkbox" value="3" className="Options" />
                Burger
              </label>
              <label className="Options">
                <input type="checkbox" value="4" className="Options" />
                Coca Cola
              </label>
              <label className="Options">
                <input type="checkbox" value="5" className="Options" />
                Juice
              </label>
              <label className="Options">
                <input type="checkbox" value="6" className="Options" />
                Water
              </label>
              <label className="Options">
                <input type="checkbox" value="7" className="Options" />
                Coffe
              </label>
              <button className="login-join_btn">save</button>
            </div>
          </form>
        </div>
        <div className="login-join">
          <form className="enter-block">
            <div className="sessions">
              <h5 className="login-join__title"> Information about sessions</h5>
              <input
                type="text"
                value=""
                placeholder="Cinema*"
                className="login-join__add"
              />
              <input
                type="text"
                value=""
                placeholder="Time*"
                className="login-join__add"
              />
              <hr />
              <input
                type="number"
                value=""
                placeholder="Ticket price *"
                className="login-join__add"
              />
              <div>
                <input
                  type="radio"
                  name="answer"
                  value="1"
                  className="TicketPrice"
                />
                VIP
                <input
                  type="radio"
                  name="answer"
                  value="2"
                  className="TicketPrice"
                />
                Love seats
                <input
                  type="radio"
                  name="answer"
                  value="3"
                  className="TicketPrice"
                />
                Economy
              </div>
              <hr />
              <h5 className="login-join__title">Optional services</h5>
              <div>
                <label>
                  Pop-corn
                  <input type="number" className="optionalPrice" />
                </label>

                <label>
                  Crisps
                  <input type="number" className="optionalPrice" />
                </label>

                <label>
                  Burger
                  <input type="number" className="optionalPrice" />
                </label>

                <label>
                  Coca Cola
                  <input type="number" className="optionalPrice" />
                </label>

                <label>
                  Juice
                  <input type="number" className="optionalPrice" />
                </label>

                <label>
                  Water
                  <input type="number" className="optionalPrice" />
                </label>

                <label>
                  Coffe
                  <input type="number" className="optionalPrice" />
                </label>
              </div>
              <button className="login-join_btn">save</button>
              <button className="login-join_btn">Add</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminPage;
