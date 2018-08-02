import React from "react";
import Select from "react-select";
import logo from "./logo.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PagesRouter from "../content/PagesRouter";

const options = [
  { value: "1", label: "Grodno" },
  { value: "2", label: "Vitebsk" },
  { value: "3", label: "Mogilev" },
  { value: "4", label: "Molodechno" },
  { value: "5", label: "Brest" },
  { value: "6", label: "Minsk" }
];
class Header extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired
      })
    )
  };
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    let city = document.querySelector(".city");
    city.innerHTML = selectedOption.label;
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="header">
        <Link exact to="/" className="logo">
          <div className="header__logo">Big cinema</div>
        </Link>
        <div className="header__city">
          <div className="city" />
          <Select
            className="header__change-city"
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        </div>
        <form className="header__search">
          <input
            className="header__search__inp"
            type="text"
            defaultValue={this.props.deffreeinputtext}
            onChange={this.process}
          />

          <button className="header__search__button">
            <img src={logo} className="App-logo" alt="logo" />
          </button>
        </form>
      </div>
    );
  }
}

export default Header;
