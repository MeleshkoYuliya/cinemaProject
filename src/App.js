import React, { Component } from "react";
// import Header from "./components/header/Header";
// import Content from "./components/content/Content";
// import PropTypes from "prop-types";
import MainLayout from "./components/MainLayout";
import "./App.css";
import "./scss/style.scss";

class App extends Component {
  render() {
    return (
      <div>
        <MainLayout />
      </div>
    );
  }
}

export default App;
