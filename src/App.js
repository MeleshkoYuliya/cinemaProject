import React, { Component } from "react";
import Header from "./components/header/Header";
import Content from "./components/Content";
import "./App.css";
import "./scss/style.scss";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
