import React from "react";
import Films from "./Films";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
 

class Home_Page extends React.Component {
  render() {
    const obj = Object.assign({}, this.props.movies.movies[0]);
    const moviesNow = Object.values(obj);

    return (
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div>    
        <Films films={moviesNow} />
      </div>
      </ReactCSSTransitionGroup>
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
