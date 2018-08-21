import React from "react";
import Films from "./Films";
import { connect } from "react-redux";

class Home_Page extends React.Component {
  render() {
    const obj = Object.assign({}, this.props.movies.movies[0]);
    const moviesNow = Object.values(obj);

    return (
      <div>
        <Films films={moviesNow} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const props = {
    movies: state.movies
  };
  return props;
};

export default connect(mapStateToProps)(Home_Page);
