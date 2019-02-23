import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { fetchRobots } from '../../state/robots/actions';

import './MainContainer.scss';
import Robots from '../Robots/Robots';

class MainContainer extends Component {
  
  componentWillMount() {
    this.props.fetchRobots();
  }
  
  render() {
    const {
      loading,
      robots
    } = this.props;

    return (
      <div>
        <Container className="main-container">
          {loading && <div className="lds-hourglass"></div>}
          <Robots robots={robots}/>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.robots.loading,
    robots: state.robots.payload
  }
}

const mapDispatchToProps = {
  fetchRobots
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);