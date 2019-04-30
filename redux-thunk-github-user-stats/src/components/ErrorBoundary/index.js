import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  // https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes
  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
        return (
          <h2>Ooops. Something went wrong...</h2>
        )
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;