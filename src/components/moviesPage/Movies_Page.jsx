import React from "react";
import FilmsNow from "./FilmsNow";
import FilmsSoon from "./FilmsSoon";
import { connect } from "react-redux";
import ToolTip from "react-portal-tooltip";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
// import { requestFilms } from "../mainLayout/actions/filmsNow-actions";
// import { requestFilmsSoon } from "../mainLayout/actons_filmsSoon/filmsSoon-actions";

class Movies_Page extends React.Component {
  // componentDidMount = () => {
  //   const { onAddFilms, onAddTodo } = this.props;
  //   onAddFilms({ ...this.state });
  //   onAddTodo({ ...this.state });
  // };
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
      transitionLeave={false}>
      <div className="movies">
        <div className="films-now">
          <h4
            id="text"
            onMouseEnter={this.showTooltip.bind(this)}
            onMouseLeave={this.hideTooltip.bind(this)}
          >
            Now Showing
          </h4>
          <ToolTip
            active={this.state.isTooltipActive}
            position="top"
            arrow="center"
            parent="#text"
          >
            <div>
              <p>This is the content of the tooltip</p>
            </div>
          </ToolTip>
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
// const mapDispatchToProps = dispatch => {
//   return {
//     onAddFilms: dataSoon => {
//       dispatch(requestFilmsSoon(dataSoon));
//     },
//     onAddTodo: movies => {
//       dispatch(requestFilms(movies));
//     }
//   };
// };
const mapStateToProps = state => {
  const props = {
    movies: state.movies,
    dataSoon: state.dataSoon
  };
  return props;
};

export default connect(mapStateToProps)(Movies_Page);
// const mapStateToProps = state => {
//   return {
//     movies: state.movies,
//     dataSoon: state.dataSoon
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Movies_Page);
