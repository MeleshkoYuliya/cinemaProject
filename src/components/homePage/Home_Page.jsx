import React from "react";
import Films from "./Films";
import axios from "axios";
import { push } from "connected-react-router";

const instance = axios.create({
  baseURL: "https://films-6ff5c.firebaseio.com/"
});

class Home_Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmsNow: []
    };
  }

  componentDidMount() {
    instance
      .get("moviesNow.json")
      .then(data => {
        this.setState({
          filmsNow: data.data
        });
      })
      .catch(e => console.log(e));
    // const testMovies = [
    //   { name: "Batman", id: 1 },
    //   { name: "Batman 2", id: 2 },
    //   { name: "Batman 3", id: 3 }
    // ];

    // instance
    //   .post("movies-test.json", testMovies)
    //   .then(data => console.log("Success: ", data));

    // instance
    //   .get("moviesNow")
    //   .then(data => console.log(data))
    //   .catch(e => console.log(e));
  }

  handleClick = () => {
    debugger;
    push("/movies");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Movies</button>
        <Films films={this.state.filmsNow} />
      </div>
    );
  }
}

export default Home_Page;
