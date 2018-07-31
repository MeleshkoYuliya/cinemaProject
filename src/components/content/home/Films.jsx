import React from "react";
import PropTypes from "prop-types";
import Film from "./Film";

class Films extends React.PureComponent {
  static propTypes = {
    films: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  };

  render() {
    var filmCode = this.props.films.map(film => (
      <Film key={film.code} info={film} />
    ));

    return <div className="home">{filmCode}</div>;
  }
}

export default Films;
