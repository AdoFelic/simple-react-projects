import React, { useState } from "react";
import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import UserCard from "../UserCard";
import SearchForm from "../SearchForm";
import Loader from "../Loader";
import ErrorBoundary from "../ErrorBoundary";

import { fetchUserData } from "../../state/userData/actions";

import "./SearchUser.scss";

const SearchUser = ({ onFetchUser, userData, isPending, error }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    onFetchUser(username);
  };

  const onUsernameChange = evt => {
    setUsername(evt.target.value);
  };

  return (
    <Container className="main-container">
      <Row>
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <SearchForm
            username={username}
            onUsernameChange={onUsernameChange}
            handleSubmit={handleSubmit}
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }} sm={12} className="text-center">
          <ErrorBoundary>
            {isPending ? <Loader /> : null}
            {error !== null || userData.message === "Not Found"
              ? "Not Found"
              : null}
            {userData.length !== 0 &&
              !isPending &&
              userData.message !== "Not Found" && <UserCard user={userData} />}
          </ErrorBoundary>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.userData.user,
    isPending: state.userData.isPending,
    error: state.userData.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: username => dispatch(fetchUserData(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchUser);
