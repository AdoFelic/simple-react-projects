import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SearchForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Who are you looking for?" name="username" value={this.props.username} onChange={this.props.onUsernameChange} />
            <Form.Text className="text-muted">
              Enter the username of a github user to see some stats.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" size="sm" block>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default SearchForm;