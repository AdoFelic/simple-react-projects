import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UserCard from '../UserCard';
import SearchForm from '../SearchForm';
import Loader from '../Loader';
import ErrorBoundary from '../ErrorBoundary';

import { fetchUserData } from '../../state/userData/actions';

import "./SearchUser.scss";

class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { username } = this.state;
    this.props.onFetchUser(username);
  }

  onUsernameChange = evt => {
    this.setState({ username: evt.target.value });
  }

  render() {
    const { userData, isPending, error } = this.props;
    const { username } = this.state;
    return (
      <Container className="main-container">
        <Row>
          <Col md={{ span: 6, offset: 3 }} sm={12}>
            <SearchForm username={username} onUsernameChange={this.onUsernameChange} handleSubmit={this.handleSubmit}/>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} sm={12} className="text-center">
            <ErrorBoundary>
              {isPending ? <Loader /> : null}
              {error !== null || userData.message === "Not Found" ? "Not Found" : null}
              {userData.length !== 0 && !isPending && userData.message !== "Not Found" && <UserCard user={userData}/>}
            </ErrorBoundary>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData.user,
    isPending: state.userData.isPending,
    error: state.userData.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUser: (username) => dispatch(fetchUserData(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);