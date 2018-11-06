import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MainLayout from './components/mainLayout/MainLayout';

import './scss/style.scss';

class App extends Component {
  render() {
    return (
      <div>
        <MainLayout />
      </div>
    );
  }
}

export default withRouter(App);
