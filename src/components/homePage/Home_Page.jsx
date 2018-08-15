import React from "react";
import Films from "./Films";
// import { push } from "connected-react-router";
import { connect } from "react-redux";
import { requestFilms } from "../mainLayout/actions/actions";

class Home_Page extends React.Component {
  componentDidMount = () => {
    const { onAddTodo } = this.props;
    onAddTodo({ ...this.state });
  };
  render() {
    const obj = Object.assign({}, this.props.data.movies[0]);
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
    onAddTodo: data => {
      dispatch(requestFilms(data));
    }
  };
};

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home_Page);
