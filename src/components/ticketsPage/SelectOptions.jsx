import React from "react";
import SelectCinema from "react-select";
import SelectDate from "react-select";
import PropTypes from "prop-types";

const cinemas = [
  { value: "1", label: "Arena City Silver Screen" },
  { value: "2", label: "Velcom cinema" },
  { value: "3", label: "Galileo Silver Screen" },
  { value: "4", label: "Belarus" }
];
const date = [
  { value: "5", label: "9 August" },
  { value: "6", label: "10 August" },
  { value: "7", label: "11 August" },
  { value: "8", label: "12 August" },
  { value: "9", label: "13 August" }
];
const typeSession = [
  { value: "10", label: "VMAX" },
  { value: "11", label: "Dolby Digital" },
  { value: "12", label: "3D" },
  { value: "13", label: "2D" }
];
class SelectOptions extends React.Component {
  static propTypes = {
    cinemas: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired
      })
    ),
    date: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired
      })
    )
  };
  state = {
    selectedCinema: null,
    selectedDate: null,
    selectedSession: null
  };
  handleChange = selectedCinema => {
    this.setState({ selectedCinema });
  };
  handleChangeDate = selectedDate => {
    this.setState({ selectedDate });
  };
  handleChangeSession = selectedSession => {
    this.setState({ selectedSession });
  };
  render() {
    const { selectedCinema, selectedDate, selectedSession } = this.state;
    return (
      <div className="select-options">
        <SelectCinema
          className="header__change-city"
          value={selectedCinema}
          placeholder="Select cinema"
          onChange={this.handleChange}
          options={cinemas}
        />
        <SelectDate
          className="header__change-city"
          value={selectedDate}
          placeholder="Select date"
          onChange={this.handleChangeDate}
          options={date}
        />
        {/* {console.log(selectedDate, selectedCinema, selectedSession)} */}
        <SelectDate
          className="header__change-city"
          value={selectedSession}
          placeholder="Type session"
          onChange={this.handleChangeSession}
          options={typeSession}
        />
      </div>
    );
  }
}

export default SelectOptions;
