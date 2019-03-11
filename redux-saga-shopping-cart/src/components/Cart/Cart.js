import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { Card, Row, Col } from 'react-bootstrap';
import { FiShoppingCart, FiXCircle } from 'react-icons/fi';
import { fetchCart, removeFromCart } from '../../state/cart/actions';
import './Cart.scss';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { showToggle: false }
  }

  componentWillMount() {
    this.props.fetchCart();
  }

  onRemove = (id) => {
    this.props.removeFromCart(id);
  }

  toggleCart = () => {
    this.setState({
      showToggle: !this.state.showToggle
    })
  }
  render() {
    const {
      robots
    } = this.props;

    return (
      <div className="cart__container">
        <FiShoppingCart className="cart__icon" onClick={this.toggleCart} />
          <Card className={"cart__container-content " + (this.state.showToggle ? "opened" : "closed")}>
            {robots.length === 0 && <Card.Header>The cart is empty!</Card.Header>}
            {robots.length > 0 &&
              <>
                <Card.Body>
                  {
                    robots.map(item => (
                      <Row key={item.robot.id} className="card__container-item">
                        <Col xs={4}>
                          <img alt={item.robot.name} src={item.robot.avatar}/>
                        </Col>
                        <Col className="card__container-item-details" xs={6}>
                          <div>{item.robot.name}</div>
                          <div>{item.robot.price}$</div>
                          <div>x{item.quantity}</div>
                        </Col>
                        <Col xs={2}>
                            <FiXCircle className="remove__icon" onClick={() => this.onRemove(item.robot.id)}/>
                        </Col>
                      </Row>
                    ))
                  }
                </Card.Body>
                <Card.Footer>Total: {robots.reduce((acc, curr) => {
                  return acc + (Number(curr.robot.price) * Number(curr.quantity));
                }, 0).toFixed(2)}$</Card.Footer>
              </>
            }
          </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    robots: state.cart.payload
  }
}

const mapDispatchToProps = {
  fetchCart,
  removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);