import React from "react";
import Select from "react-select";
import logo from "./img/logo.svg";
import PropTypes from "prop-types";

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
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <div className="header">
        <div className="header__logo">Big cinema</div>
        <div className="header__city">
          <Select
            className="header__change-city"
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        </div>
        <div className="header__search">
          <input
            className="header__search__inp"
            type="text"
            defaultValue="search"
          />
          <button className="header__search__button">
            <img src={logo} className="App-logo" alt="logo" />
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
