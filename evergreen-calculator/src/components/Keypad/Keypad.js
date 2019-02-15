import React, { Component } from 'react';
import { Pane, Button } from 'evergreen-ui';
import {KEYS} from '../../utils/constants';
import './Keypad.css';

class Keypad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: props.theme
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({theme: newProps.theme});
  }

  render() {
    const keyButtons = KEYS.map(value => {
      return <Button className="keypad-button" value={value} key={value.toString()} onClick={this.props.onKeyClick}>{value}</Button>
    });

    return (
      <div>
        <Pane clearfix>
          {keyButtons}
        </Pane>
      </div> 
      
    );
  }
}

export default Keypad;
