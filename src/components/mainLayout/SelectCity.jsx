import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const options = [
  { value: "1", label: "Grodno" },
  { value: "2", label: "Vitebsk" },
  { value: "3", label: "Mogilev" },
  { value: "4", label: "Molodechno" },
  { value: "5", label: "Brest" },
  { value: "6", label: "Minsk" }
];

class SelectCity extends React.Component {
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
    // let city = document.querySelector(".city");
    // city.innerHTML = selectedOption.label;
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <div className="header__city">
        <Select
          className="header__change-city"
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        {/* <div className="city" /> */}
      </div>
    );
  }
}
export default SelectCity;
