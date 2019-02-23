import React, { Component } from 'react';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;
