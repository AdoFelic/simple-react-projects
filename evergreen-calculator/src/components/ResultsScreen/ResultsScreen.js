import React, { Component } from 'react';
import { Pane } from 'evergreen-ui';
import './ResultsScreen.css';

// {Number(Math.round(20.2334 * 100.0) / 100.0)}
 
class ResultsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: props.result
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({result: newProps.result});
  }

  render() {
    return (
      <div>
        <Pane 
            clearfix
            display="flex"
            flexDirection="column"
            background="white"
            className="calculator-results__container">
              <span>
                {this.props.result}
              </span>
          </Pane>
      </div> 
      
    );
  }
}

export default ResultsScreen;
