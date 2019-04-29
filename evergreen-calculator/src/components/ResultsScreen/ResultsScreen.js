import React from 'react';
import { Pane } from 'evergreen-ui';
import './ResultsScreen.css';

const ResultsScreen = ({ result }) => {
  return (
    <Pane 
      clearfix
      display="flex"
      flexDirection="column"
      background="white"
      className="calculator-results__container"
    >
        <span>
          {result}
        </span>
    </Pane>
  );
}

export default ResultsScreen;
