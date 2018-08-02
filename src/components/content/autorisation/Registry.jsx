import React from "react";
import { FormErrors } from "./FormErrors";

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
    contacts: [],
    isLoading: true
  };

  //  MylocalStorage=(keyNames)=> { // конструктор класса
  //     this.keyNames = keyNames; //ключ для хранилища
  //     var storage = {}; // здесь хранилище будет сохранять всё что нужно

  //     if (localStorage.getItem(keyNames)) {
  //         this.storage = JSON.parse(localStorage.getItem(keyNames));
  //     } else {
  //         this.storage = {};
  //     }

  //     this.addValue = function(key, value) {
  //         this.storage[key] = value; // сохраняем значение value под именем key
  //         var storageJson = JSON.stringify(this.storage);
  //         localStorage.setItem(keyNames, storageJson);
  //     }

  //     this.getValue = function(keyNames) {
  //         return this.storage[keyNames];
  //     }

  //     this.deleteValue = function(key) {
  //         if (this.storage[key] !== undefined) {
  //             delete this.storage[key];
  //             var storageJson = JSON.stringify(this.storage);
  //             localStorage.setItem(keyNames, storageJson);
  //         }
  //     }

  //     this.getKeys = function() {
  //         return Object.keys(this.storage);
  //     }
  // }

  // var proceeds= new MylocalStorage('proceeds');

  // proceedsInfo=() =>{ //добавляем источники доходов

  // 	var sources = document.getElementById('sourse');
  // 	var source = sources.value;

  // 	var money = document.getElementById('money');
  // 	var price = money.value;

  // 	var date_Entry = document.getElementById('date');
  // 	var stringDate = date_Entry.value;
  // 	var t = stringDate.split('.'),
  // 			myYear = t[2],
  // 			myMonth = parseInt(t[1]) - 1,
  // 			myDate = parseInt(t[0]);
  // 	var dateEntry = new Date(myYear, myMonth, myDate);
  // 	var erorSource = document.getElementById("erorSource");
  // 	var erorMoney = document.getElementById('erorMoney');
  // 	if (source.length == 0 || price == 0) {

  // 			erorSource.style.display = "inline";
  // 			erorMoney.style.display = "inline";

  // 	} else {
  // 			proceeds.addValue(source, { priceE: price, dateE: dateEntry });

  // 			erorSource.style.display = "none";
  // 			erorMoney.style.display = "none";
  // 	}
  // }
  componentWillMount() {
    localStorage.getItem("contacts") &&
      this.setState({
        contacts: JSON.parse(localStorage.getItem("contacts")),
        isLoading: false
      });
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {}
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("contacts", JSON.stringify(nextState.contacts));
    localStorage.setItem("contactsDate", Date.now());
  }

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
        userNameValid: userNameValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.userNameValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <form className="register-block">
        <h4 className="login-join__title">Register</h4>
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
            value={this.state.email}
            onChange={this.handleUserInput}
          />
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
            name="userName"
            placeholder="User Name"
            value={this.state.userName}
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
            value={this.state.password}
            onChange={this.handleUserInput}
          />
        </div>
        <button
          className="login-join_btn"
          type="submit"
          disabled={!this.state.formValid}
        >
          Sign up
        </button>
      </form>
    );
  }
}

export default Registry;
