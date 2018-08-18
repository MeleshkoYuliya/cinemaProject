import React from "react";
import Films from "./Films";
import { connect } from "react-redux";
import { requestFilms } from "../mainLayout/actions/filmsNow-actions";

class Home_Page extends React.Component {
  componentDidMount = () => {
    const { onAddTodo } = this.props;
    onAddTodo({ ...this.state });
  };

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
const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: movies => {
      dispatch(requestFilms(movies));
    }
  };
};

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home_Page);
