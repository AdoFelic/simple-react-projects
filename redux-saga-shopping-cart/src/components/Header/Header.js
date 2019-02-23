import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Cart from '../Cart/Cart';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Redux-Saga example</Navbar.Brand>
            <Cart />
        </Navbar>
      </div>
    );
  }
}

export default Header;