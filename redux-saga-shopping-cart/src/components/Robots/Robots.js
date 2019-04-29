import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import { addToCart } from "../../state/cart/actions";
import "./Robots.scss";

const Robots = ({ addToCart, robots }) => {
  const addRobotToCart = robot => {
    addToCart(robot, 1);
  };

  return (
    <div>
      <Row>
        {robots.map(bot => (
          <Col key={bot.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="robots-card">
              <Badge pill className="robots-price__badgde" variant="primary">
                {bot.price}$
              </Badge>
              <Card.Img
                variant="top"
                src={bot.avatar}
                className="robots-card__img"
              />
              <Card.Body>
                <Card.Title>{bot.name}</Card.Title>
                <Card.Text>{bot.manufacturer}</Card.Text>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => addRobotToCart(bot)}
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  addToCart
};

Robots.propTypes = {
  robots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    })
  ).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Robots);
