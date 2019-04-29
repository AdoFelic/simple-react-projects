import React from 'react';
import { Combobox } from 'evergreen-ui'

const ThemeSwitcher = ({ onChangeTheme, selectedTheme }) => {
  return (
    <Combobox
      items={['Light', 'Dark']}
      onChange={onChangeTheme}
      placeholder="Theme"
      autocompleteProps={{
        title: 'Theme'
      }}
      style={{ margin: "0 auto", display: "flex" }}
      defaultSelectedItem={selectedTheme}
    />
  );
}

export default ThemeSwitcher;
