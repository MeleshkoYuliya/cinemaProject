import React from "react";
import FilmsNow from "./FilmsNow";
import FilmsSoon from "./FilmsSoon";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Movies_Page extends React.Component {
  state = {
    isTooltipActive: false
  };
  showTooltip() {
    this.setState({ isTooltipActive: true });
  }
  hideTooltip() {
    this.setState({ isTooltipActive: false });
  }
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className="movies">
          <div className="films-now">
            <h4>Now Showing</h4>

            <FilmsNow movies={this.props.movies.movies} />
          </div>
          <div className="films-soon">
            <h4>Coming Soon</h4>
            <FilmsSoon moviesSoon={this.props.dataSoon.moviesSoon} />
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

const mapStateToProps = state => {
  const props = {
    movies: state.movies,
    dataSoon: state.dataSoon
  };
  return props;
};

export default connect(mapStateToProps)(Movies_Page);
