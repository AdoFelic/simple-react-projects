import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FiChevronsUp } from "react-icons/fi";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { fetchRobots } from "../../state/robots/actions";
import Robots from "../Robots/Robots";
import "./MainContainer.scss";

const MainContainer = ({ fetchRobots, loading, robots }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    fetchRobots();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    for (let i = 0; i < window.scrollY; i++) {
      (function() {
        setTimeout(function scrolling() {
          window.scroll(0, window.scrollY - 1);
        }, 5000 / window.scrollY);
      })();
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 56) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  return (
    <div>
      <Container className="main-container">
        {loading && <div className="lds-hourglass" />}
        <Robots robots={robots} />
        {showScrollButton && (
          <Button className="to-top__button" onClick={scrollToTop}>
            <FiChevronsUp />
          </Button>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.robots.loading,
    robots: state.robots.payload
  };
};

const mapDispatchToProps = {
  fetchRobots
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
