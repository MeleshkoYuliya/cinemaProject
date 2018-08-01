import React, { Component } from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import "./App.css";
import "./scss/style.scss";
let defaultfreeinputtext = "search";
class App extends Component {
  render() {
    return (
      <div>
        <Header deffreeinputtext={defaultfreeinputtext} />
        <Content />
      </div>
    );
  }
}

export default App;
