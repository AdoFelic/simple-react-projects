import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Cart from "../Cart/Cart";
import "./Header.scss";

export default () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Redux-Saga example</Navbar.Brand>
        <Cart />
      </Navbar>
    </div>
  );
};
