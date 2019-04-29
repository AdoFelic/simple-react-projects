import React from 'react';
import { Pane, Button } from 'evergreen-ui';
import { KEYS } from '../../utils/constants';
import './Keypad.css';

const Keypad = ({ onKeyClick }) => {
  const keyButtons = KEYS.map(value => (
      <Button 
        className="keypad-button" 
        value={value} 
        key={value.toString()} 
        onClick={onKeyClick}
      >
        {value}
      </Button>
    )
  );

  return (
    <Pane clearfix>
      {keyButtons}
    </Pane>
  );
}

export default Keypad;
