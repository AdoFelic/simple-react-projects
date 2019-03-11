import React, { Component } from 'react';
import './UserCard.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class UserCard extends Component {
  render() {
    return (
      <div className="user-card__container">
        <Container>
          <Row>
            <Col xs={12}>
              <Card style={{width: "250px"}}>
                <Card.Img variant="top" src={this.props.user.avatar_url} />
                <Card.Body>
                  <Card.Title>{this.props.user.login}({this.props.user.name})</Card.Title>
                  <Card.Text>
                    <ListGroup>
                      <ListGroup.Item>Followers: {this.props.user.followers}</ListGroup.Item>
                      <ListGroup.Item>Following: {this.props.user.following}</ListGroup.Item>
                      <ListGroup.Item>Public repos: {this.props.user.public_repos}</ListGroup.Item>
                      <ListGroup.Item>Public gists: {this.props.user.public_gists}</ListGroup.Item>
                      <ListGroup.Item>{this.props.user.location != null ? this.props.user.location : 'Location not provided'}</ListGroup.Item>
                      <ListGroup.Item><a href={this.props.user.html_url} rel="noopener noreferrer" target="_blank">Github profile</a></ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



export default UserCard;