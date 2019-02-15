import React, { Component } from 'react';
import { Combobox } from 'evergreen-ui'
import './ThemeSwitcher.css';

class ThemeSwitcher extends Component {
  render() {
    return (
      <div>
        <div className="theme-switcher-container">
          <Combobox
            items={['Light', 'Dark']}
            onChange={this.props.onChangeTheme}
            placeholder="Theme"
            autocompleteProps={{
              title: 'Theme'
            }}
            defaultSelectedItem={this.props.selectedTheme}
          />
        </div>
      </div> 
      
    );
  }
}

export default ThemeSwitcher;
