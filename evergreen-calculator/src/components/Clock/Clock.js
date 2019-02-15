import React, { Component } from 'react';
import { Badge } from 'evergreen-ui'
import './Clock.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      theme: props.theme
    }
  }

  tickTock() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.clock = setInterval(() => this.tickTock(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.clock)
  }

  componentWillReceiveProps(newProps) {
    this.setState({theme: newProps.theme});
  }

  render() {
    const badgeStyle = {
      "backgroundColor": this.state.theme === "Light" ? "#425A70": "#DDEBF7",
      "color": this.state.theme === "Light" ? "#DDEBF7": "#425A70"
    }
    return (
      <div className="clock-container">
        <Badge style={badgeStyle} isSolid>
            {this.state.date.toLocaleDateString()}
        </Badge>
        <Badge style={badgeStyle} isSolid>
            {this.state.date.toLocaleTimeString()}
        </Badge>
      </div>
    );
  }
}

export default Clock;
