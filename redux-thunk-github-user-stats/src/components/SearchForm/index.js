import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchForm = ({ handleSubmit, username, onUsernameChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Who are you looking for?"
          name="username"
          value={username}
          onChange={onUsernameChange}
        />
        <Form.Text className="text-muted">
          Enter the username of a github user to see some stats.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" size="sm" block>
        Submit
      </Button>
    </Form>
  );
};

export default SearchForm;
