import React from "react";
import Cinemas from "./Cinemas";
import { withRouter } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { connect } from "react-redux";
import { requestCinemas } from "./actions/cinemas-actions";

class Cinemas_Page extends React.Component {
  componentDidMount = () => {
    const { onAddCinemas } = this.props;
    onAddCinemas({ ...this.state });
  };
  render() {
    const obj = Object.assign({}, this.props.cinemas.cinemas[0]);
    const cinemas = Object.values(obj);
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Cinemas cinemas={cinemas} />
      </ReactCSSTransitionGroup>
    );
  }
}

const mapStateToProps = state => {
  return {
    cinemas: state.cinemas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCinemas: cinemas => {
      dispatch(requestCinemas(cinemas));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cinemas_Page)
);
