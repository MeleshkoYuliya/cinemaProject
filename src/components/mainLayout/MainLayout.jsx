import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";
import Authorisation from "../authorisation/Authorisation";
import Movies_Page from "../moviesPage/Movies_Page";
import ChooseSeats from "../chooseSeatsePage/ChooseSeats";
import BuyTickets from "../ticketsPage/BuyTickets";
import Cinemas_Page from "../cinemasPage/Cinemas_Page";
import SelectSession from "./SelectSession";
import Home_Page from "../homePage/Home_Page";
import Header from "./Header";
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import { requestFilms } from "./actions/actions";
import { push } from "connected-react-router";

class MainLayout extends Component {
  componentDidMount = () => {
    const { onAddTodo } = this.props;
    onAddTodo({ ...this.state });
  };
  handleClick = () => {
    push("/movies");
  };
  render() {
    return (
      <div>
       <button onClick={this.handleClick}>Movies</button>
        {console.log(this.props.data.movies)}
        <Header moviesNow={this.props.moviesNow}>
        </Header>
        <Route path="/authorisation" component={Authorisation} />
        <Route path="/movies" component={Movies_Page} />
        <Route path="/buy-tickets" component={BuyTickets} />
        <Route exact path="/" component={Home_Page} />
        <Route path="/cinemas" component={Cinemas_Page} />
        <Route path="/choose-seats" component={ChooseSeats} />
        <Route path="/select-session" component={SelectSession} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: data => {
      dispatch(requestFilms(data)     
      )
    }
    
  };
 
};
// const mapDispatchToProps = dispatch => bindActionCreators({
//   return: {
//     onAddTodo: data => {
//           requestFilms(data)     
//         },
//         changePage: () => push('/about-us')
//       }

// }, dispatch)

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
