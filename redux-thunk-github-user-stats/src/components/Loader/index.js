import React, { Component } from 'react';

import "./Loader.scss";

class Loader extends Component {
  render() {
    return (
      <div className="lds-circle">
        <div></div>
      </div>
    );
  }
}

export default Loader;