import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRobots } from '../../state/robots/actions';

import { FiChevronsUp } from 'react-icons/fi';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './MainContainer.scss';
import Robots from '../Robots/Robots';

class MainContainer extends Component {
  constructor() {
    super();

    this.state = {
      showScrollButton : false,
    }
  };

  componentWillMount() {
    this.props.fetchRobots();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  scrollToTop = () => {
    for (let i=0;i<window.scrollY;i++){
      (function(){
        setTimeout(function scrolling(){
          window.scroll(0, window.scrollY-1);
        }, (5000/window.scrollY))
      })();
    }
  }

  handleScroll = () => {
    if (window.scrollY > 56) {
      this.setState({showScrollButton: true})
    } else {
      this.setState({showScrollButton: false})
    }
  }
  
  render() {
    const {
      loading,
      robots
    } = this.props;

    return (
      <div>
        <Container className="main-container" ref={this.mainContainerRef}>
          {loading && <div className="lds-hourglass"></div>}
          <Robots robots={robots} onScroll={this.onScrollContainer}/>
          {this.state.showScrollButton && <Button className="to-top__button" onClick={this.scrollToTop}> <FiChevronsUp /> </Button>}
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