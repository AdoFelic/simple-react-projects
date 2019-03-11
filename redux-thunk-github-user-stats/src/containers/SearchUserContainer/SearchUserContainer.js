import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUserData } from '../../state/userData/actions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UserCard from '../UserCard/UserCard';
import SearchForm from '../../components/SearchForm/SearchForm';
import Loader from '../../components/Loader/Loader';
import "./SearchUserContainer.scss";
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

class SearchUserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onFetchUser(this.state.username);
  }

  onUsernameChange = evt => {
    this.setState({username: evt.target.value});
  }

  render() {
    const { userData, isPending, error } = this.props;
    return (
      <Container className="main-container">
        <Row>
          <Col md={{ span: 6, offset: 3 }} sm={12}>
            <SearchForm username={this.state.username} onUsernameChange={this.onUsernameChange} handleSubmit={this.handleSubmit}/>
          </Col>
        </Row>
        <Row>
          <ErrorBoundary>
              <Col md={{ span: 6, offset: 3 }} sm={12} className="text-center">
                {isPending ? <Loader /> : null}
                {error !== null || userData.message === "Not Found" ? "Not Found" : null}
                {userData.length !== 0 && !isPending && userData.message !== "Not Found" && <UserCard user={userData}/>}
              </Col>
          </ErrorBoundary>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchUserContainer);