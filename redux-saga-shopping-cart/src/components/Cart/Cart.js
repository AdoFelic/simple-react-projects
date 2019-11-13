import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import { FiShoppingCart, FiXCircle } from "react-icons/fi";
import { fetchCart, removeFromCart } from "../../state/cart/actions";
import "./Cart.scss";

const Cart = ({ fetchCart, removeFromCart, robots }) => {
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    fetchCart();
  }, [robots.reduce((acc, curr) => (acc += curr.quantity), 0)]);

  const onRemove = id => {
    removeFromCart(id);
  };

  const toggleCart = () => {
    setShowToggle(!showToggle);
  };

  return (
    <div className="cart__container">
      <div>
        <FiShoppingCart className="cart__icon" onClick={toggleCart} />
        {robots.length > 0 && (
          <div className="cart__items-quantity" onClick={toggleCart}>
            {robots.reduce((acc, curr) => (acc += curr.quantity), 0)}
          </div>
        )}
      </div>
      <Card
        className={
          "cart__container-content " + (showToggle ? "opened" : "closed")
        }
      >
        {robots.length > 0 ? (
          <>
            <Card.Header>
              Cart
            </Card.Header>
            <Card.Body>
              {robots.map(item => (
                <Row key={item.robot.id} className="card__container-item">
                  <Col xs={4}>
                    <img alt={item.robot.name} src={item.robot.avatar} />
                  </Col>
                  <Col className="card__container-item-details" xs={6}>
                    <div>{item.robot.name}</div>
                    <div>{item.robot.price}$</div>
                    <div>x{item.quantity}</div>
                  </Col>
                  <Col xs={2} className="remove-icon__wrapper">
                    <FiXCircle
                      className="remove__icon"
                      onClick={() => onRemove(item.robot.id)}
                    />
                  </Col>
                </Row>
              ))}
            </Card.Body>
            <Card.Footer>
              Total:{" "}
              {robots
                .reduce((acc, curr) => {
                  return acc + Number(curr.robot.price) * Number(curr.quantity);
                }, 0)
                .toFixed(2)}
              $
            </Card.Footer>
          </>
        ) : (
          <Card.Header>The cart is empty!</Card.Header>
        )}
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    robots: state.cart.payload
  };
};

const mapDispatchToProps = {
  fetchCart,
  removeFromCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
