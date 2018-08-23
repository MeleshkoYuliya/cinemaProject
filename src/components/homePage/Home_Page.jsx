import React from "react";
import Films from "./Films";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Switch, Route, Link } from "react-router-dom";
import AboutFilm from "./AboutFilm";

class Home_Page extends React.Component {
  static propTypes = {
    // moviesNow: PropTypes.arrayOf(
    film: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      url: PropTypes.string
    })
    // )
  };
  state = {
    selectedFilmId: null,
    selectedFilmName: "",
    selectedFilmUrl: ""
  };
  filmSelected = (id, name, url) => {
    console.log("выбран ответ с кодом " + id + name + url);
    this.setState({
      selectedFilmId: id,
      selectedFilmName: name,
      selectedFilmUrl: url
    });
    const { history } = this.props;
    history.push(`/film/:${id}`);
  };
  render() {
    console.log(
      this.state.selectedFilmId,
      this.state.selectedFilmName,
      this.state.selectedFilmUrl
    );
    const obj = Object.assign({}, this.props.movies.movies[0]);
    const moviesNow = Object.values(obj);
    var filmCode = moviesNow.map(v => (
      <Films
        key={v.id}
        name={v.name}
        url={v.url}
        id={v.id}
        cbSelected={this.filmSelected}
        selectedFilmId={this.state.selectedFilmId}
        selectedFilmName={this.state.selectedFilmName}
        selectedFilmUrl={this.state.selectedFilmUrl}
      />
    ));
    // console.log(moviesNow);
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className="home">
          {filmCode}
          {/* <Films
            films={moviesNow}
            cbSelected={this.answerSelected}
            selectedAnswerCode={this.state.selectedAnswerCode}
          /> */}
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
